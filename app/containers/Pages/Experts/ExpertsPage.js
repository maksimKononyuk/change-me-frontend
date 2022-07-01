import React, { useState, useRef, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import ToggleStar from '@material-ui/icons/Star'
import ToggleStarBorder from '@material-ui/icons/StarBorder'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Chat from '@material-ui/icons/Chat'
import Videocam from '@material-ui/icons/Videocam'
import brand from 'dan-api/dummy/brand'
import {
  Grid,
  Paper,
  withStyles,
  Button,
  Typography,
  Divider,
  Avatar,
  List
} from '@material-ui/core'
import {
  ArrowBackIosSharp,
  ArrowDownwardSharp,
  ArrowDropDown,
  ArrowForwardIosSharp,
  ExpandLess,
  ExpandMore,
  FilterTiltShift,
  SkipNextOutlined,
  SkipPrevious,
  SkipPreviousOutlined,
  Sort,
  ViewList
} from '@material-ui/icons'
import axios from '../../../utils/axios'
import classNames from 'classnames'
import avatarApi from 'dan-api/images/avatars'
import link from 'dan-api/ui/link'
import styles from './experts-jss'

// const dataContact = [
//   {
//     id: '1',
//     avatar: avatarApi[9],
//     name: 'James Doe',
//     title: 'Эксперт',
//     rating: 4,
//     likes: 11,
//     dislikes: 1,
//     phone: '+6281234567890',
//     secondaryPhone: '+6280987654321',
//     personalEmail: 'johndoe@mail.com',
//     companyEmail: 'johndoe@company.com',
//     address: 'Ipsum Street no.77 Block A/5A, New York',
//     website: 'http://doeclans.net',
//     favorited: false
//   },
//   {
//     id: '2',
//     avatar: avatarApi[8],
//     name: 'Jim Doe',
//     title: 'Эксперт',
//     rating: 3,
//     likes: 56,
//     dislikes: 26,
//     phone: '+657890321145',
//     secondaryPhone: '',
//     personalEmail: 'jimdoe@mail.com',
//     companyEmail: 'jimdoe@company.com',
//     address: 'Lorem Street no.76 Block B/8B, Brooklyn',
//     website: 'http://doejim.com',
//     favorited: true
//   },
//   {
//     id: '3',
//     avatar: avatarApi[2],
//     name: 'Jane Doe',
//     title: 'Эксперт',
//     rating: 5,
//     likes: 5,
//     dislikes: 0,
//     phone: '+45353695',
//     secondaryPhone: '+678910111213',
//     personalEmail: 'janedoe@mail.com',
//     companyEmail: 'janedoe@company.com',
//     address: 'Dolor Street no.76 Block B/8B, Tokyo',
//     website: 'http://janedoe.com',
//     favorited: false
//   },
//   {
//     id: '4',
//     avatar: avatarApi[10],
//     name: 'Jinx Doe',
//     title: 'Эксперт',
//     rating: 4,
//     likes: 11,
//     dislikes: 1,

//     phone: '+678543210012',
//     secondaryPhone: '',
//     personalEmail: 'jinx@mail.com',
//     companyEmail: '',
//     address: 'Paskal Street no.101 Block B/10B, Samarinda',
//     website: '',
//     favorited: 'false'
//   },
//   {
//     id: '5',
//     avatar: avatarApi[4],
//     name: 'Jihan Doe',
//     title: 'Эксперт',
//     rating: 2,
//     likes: 11,
//     dislikes: 59,
//     phone: '+45353695',
//     secondaryPhone: '+56743210468',
//     personalEmail: 'jihan@mail.com',
//     companyEmail: 'jihan@company.com',
//     address: 'Sit amet Street no.76 Block B/8B, New York',
//     website: '',
//     favorited: true
//   },
//   {
//     id: '6',
//     avatar: avatarApi[7],
//     name: 'Johny Doe',
//     title: 'Эксперт',
//     rating: 4,
//     likes: 11,
//     dislikes: 1,
//     phone: '+2234561234',
//     secondaryPhone: '+6742234235666',
//     personalEmail: 'johny_doe@mail.com',
//     companyEmail: '',
//     address: 'Vivacus Street no.2 Block C/10A, Paris',
//     website: '',
//     favorited: true
//   }
// ]

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]
    return x < y ? -1 : x > y ? 1 : 0
  })
}
function equalize(array) {
  let max = 0
  const res = [...array]
  for (const i of array) {
    if (i.length > max) {
      max = i.length
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    console.log(Math.floor((max - array[i].length) / 2) * '\u00a0\u00a0')
    if (array[i].length < max) {
      res[i] =
        '\u00a0\u00a0'.repeat((max - array[i].length) / 2) +
        array[i] +
        '\u00a0\u00a0'.repeat((max - array[i].length) / 2)
      console.log(res[i])
    }
  }
  return res
}
function ExpertsPage(props) {
  const [specializations, setSpecializations] = useState([])
  const [dataContact, setDataContact] = useState([])
  const [data, setData] = useState([])

  const [numberOfUsersPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const lastUserIndex = currentPage * numberOfUsersPerPage
  const firstUserIndex = lastUserIndex - numberOfUsersPerPage
  const currentUserArr = data.slice(firstUserIndex, lastUserIndex)
  const totalPages = Math.ceil(data.length / numberOfUsersPerPage)

  const paginationNext = (pageNumber) => {
    pageNumber < totalPages && setCurrentPage(pageNumber + 1)
  }
  const paginationPrev = (pageNumber) => {
    pageNumber > 1 && setCurrentPage(pageNumber - 1)
  }
  const paginationFirstPage = () => {
    setCurrentPage(1)
  }
  const paginationLastPage = () => {
    setCurrentPage(totalPages)
  }

  useEffect(() => {
    const reqestAsync = async () => {
      let res = await axios.get('specializations')
      setSpecializations(res.data)
      res = await axios.get('users')
      setDataContact(res.data)
      setData(res.data)
    }
    reqestAsync()
  }, [])

  const title = brand.name + ' - Blank Page'
  const description = brand.desc
  const { classes } = props
  // const f = equalize([
  //   'РАЗВЛЕЧЕНИЯ',
  //   'РАЗВЛЕЧЕНИ',
  //   'РАЗВЛЕЧЕНЯ',
  //   'РАЗВЛЕЧЕИЯ',
  //   'РИЯ',
  //   'РАЗВЛИЯ',
  //   'РАЗВЛЧЕНИЯ',
  //   'РАЗВЕЧЕНИЯ',
  //   'РАЗЛЕЧЕНИЯ',
  //   'РЧЕНИЯ',
  //   'РЗВЛЕЧЕНИЯ',
  //   'АЗВЛЕЧЕНИЯ',
  //   'РАЗВЛЕЧЕНИЯ',
  //   'РАЗНИ',
  //   'РАЗВЛЕЧЕНЯ',
  //   'РАЗВЛЕЧЕИЯ',
  //   'РАЗВЛЕЧНИЯ',
  //   'РАЗВЛЕЕНИЯ',
  //   'РАЗВЛЧИЯ',
  //   'РАЗВЕЧЕНИЯ',
  //   'РАЗЛЕЧЕНИЯ',
  //   'РАВЛЕЧЕНИЯ',
  //   'ЛЕЧЕНИЯ',
  //   'АЗВЛЕЧЕНИЯ',
  // ]);
  const f = equalize(
    specializations.map((item) => {
      return item.name
    })
  )
  const types = useRef()
  const [filters, setFilters] = useState(Array(12).fill(false))
  const [sort1, setSort1] = useState(0)
  const [sort2, setSort2] = useState(0)
  const [start, setStart] = useState(0)
  const [items, setItems] = useState(1)
  useEffect(() => {
    setItems(Math.floor(types.current.clientWidth / 158))
    console.log(items)
  }, [window.innerWidth])
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
      </Helmet>
      <Typography variant='h4' component='h5'>
        Эксперты
      </Typography>
      <Divider className={classes.divider} />
      <Paper className={classes.root}>
        <Grid
          container
          className={classes.header}
          spacing={3}
          //   alignItems="center"
        >
          <Grid item md={0}>
            <Grid container direction='column' justifyContent='center'>
              <Grid>
                <ExpandLess
                  className={start === 0 ? classes.disabled : classes.icon}
                  onClick={() => {
                    if (start > 0) {
                      setStart(start - items)
                    }
                  }}
                />
              </Grid>
              <Grid>
                <ViewList className={classNames(classes.icon, classes.blue)} />
              </Grid>
              <Grid>
                <ExpandMore
                  className={
                    start + 2 * items > f.length
                      ? classes.disabled
                      : classes.icon
                  }
                  onClick={() => {
                    console.log(Math.floor(types.current.clientWidth / 158))
                    if (f.length - start - items > 0) {
                      setStart(start + items)
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={11}>
            <Grid
              container
              spacing={3}
              alignItems='center'
              justifyContent='center'
              innerRef={types}
            >
              {f.slice(start, start + items * 2).map((filter, index) => (
                <Grid item>
                  <Button
                    onClick={() => {
                      const arr = [...filters]
                      arr[index] = !arr[index]
                      setFilters(arr)
                    }}
                    variant={filters[index] ? 'contained' : 'outlined'}
                    color={filters[index] ? 'primary' : 'white'}
                    size='medium'
                  >
                    {filter.replace(/ /g, '\u00a0\u00a0')}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            md={2}
            sm={6}
            xs={10}
            spacing={3}
            container
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Typography variant='h6' component='h6'>
                Фильтр по <br />
                экспертам
              </Typography>
            </Grid>
            <Grid item>
              <FilterTiltShift className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item className={classes.hide}>
            <Divider orientation='vertical' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            md={3}
            sm={6}
            xs={12}
            justifyContent='space-around'
            className={classes.filters}
          >
            <Grid
              container
              spacing={1}
              justifyContent='center'
              className={sort1 === 0 ? classes.clickable : classes.selected}
              onClick={() => {
                setSort2(0)
                let d
                if (sort1 === 0) {
                  d = sortByKey([...data], 'rating')
                  setSort1(1)
                } else if (sort1 === 1) {
                  d = [...data]
                  d = d.reverse()
                  setSort1(2)
                } else {
                  d = [...dataContact]
                  setSort1(0)
                }

                setData(d)
                console.table(data)
              }}
            >
              <Grid item>
                <Sort
                  className={sort1 === 2 ? classes.reversed : classes.icon}
                />
              </Grid>
              <Grid item>
                <Typography>Сортировать по рейтингу</Typography>
              </Grid>
              <Grid item>
                <ToggleStarBorder />
              </Grid>
            </Grid>
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              className={sort2 === 0 ? classes.clickable : classes.selected}
              onClick={() => {
                setSort1(0)
                let d
                if (sort2 === 0) {
                  d = sortByKey([...data], 'likes')
                  setSort2(1)
                } else if (sort2 === 1) {
                  d = [...data]
                  d = d.reverse()
                  setSort2(2)
                } else {
                  d = [...dataContact]
                  setSort2(0)
                }

                setData(d)
                console.table(data)
              }}
              spacing={1}
            >
              <Grid item>
                <Sort
                  className={sort2 === 2 ? classes.reversed : classes.icon}
                />
              </Grid>
              <Grid item>
                <Typography>Сортировать по отзывам</Typography>
              </Grid>
              <Grid item>
                <Avatar className={classes.greenAvatar}>
                  <ThumbUp />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />
        <div className={classes.container}>
          {currentUserArr.map((elem) => (
            <Grid
              container
              direction='row'
              className={classes.contact}
              spacing={3}
              key={elem.id}
            >
              <Grid item md={8} sm={12} xs={12}>
                <Grid
                  container
                  className={classes.listItem}
                  justifyContent='space-between'
                  spacing={1}
                  alignItems='center'
                >
                  <Grid
                    container
                    item
                    spacing={2}
                    alignItems='center'
                    md={5}
                    sm={12}
                  >
                    <Grid item>
                      <Avatar src={avatarApi[8]} className={classes.avatar} />
                    </Grid>
                    <Grid item>
                      <Tooltip title='Карточка эксперта'>
                        <Typography
                          variant='h5'
                          className={classes.clickable}
                          onClick={() => {
                            window.location.href =
                              link.profile.root + '/expert/58'
                          }}
                        >
                          {`${elem.first_name} ${elem.last_name}`}
                        </Typography>
                      </Tooltip>
                      <Typography className={classes.grey}>
                        {elem.role.name}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    item
                    spacing={1}
                    md={7}
                    sm={12}
                    xs={12}
                    justifyContent='flex-end'
                    className={classes.stars}
                  >
                    {[...Array(elem.rate)].map((star) => (
                      <Grid item>
                        <ToggleStar className={classes.icon} />
                      </Grid>
                    ))}
                    {[...Array(5 - elem.rate)].map((star) => (
                      <Grid item>
                        <ToggleStarBorder className={classes.icon} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                item
                md={4}
                sm={12}
                xs={12}
                wrap='nowrap'
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <Grid
                  item
                  md={0}
                  className={classes.hide}
                  style={{ padding: 0 }}
                >
                  <Divider orientation='vertical' />
                </Grid>

                {/* <Grid item direction="column" justifyContent="space-between"> */}
                <Grid
                  container
                  item
                  md={6}
                  // sm={6}
                  // xs={12}
                  spacing={1}
                  // style={{ padding: "30px" }}
                  justifyContent='space-around'
                  alignItems='center'
                  wrap='nowrap'
                >
                  <Grid
                    container
                    item
                    md={6}
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                    wrap='nowrap'
                  >
                    <Grid item>
                      <Tooltip title='Like'>
                        <IconButton
                          size='small'
                          className={classes.greenText}
                          aria-label='Telp'
                        >
                          <ThumbUp />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Typography noWrap>{elem.likes}</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    md={6}
                    wrap='nowrap'
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                  >
                    <Grid item>
                      <Tooltip title='Dislike'>
                        <IconButton
                          size='small'
                          className={classes.greenText}
                          aria-label='Telp'
                        >
                          <ThumbDown />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Typography>{elem.dislikes}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* </Grid> */}
                <Grid
                  item
                  md={0}
                  className={classes.hide}
                  style={{ padding: 0 }}
                >
                  <Divider orientation='vertical' />
                </Grid>
                {/* <Grid
              item
              container
              direction="column"
              justifyContent="space-between"
            > */}
                <Grid
                  container
                  item
                  spacing={1}
                  md={6}
                  // sm={6}
                  // style={{ padding: "30px 0" }}
                  justifyContent='space-around'
                  alignItems='center'
                >
                  <Grid item>
                    <Tooltip title='Chat'>
                      <IconButton
                        className={classes.blueText}
                        aria-label='Chat'
                      >
                        <Chat />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title='Call'>
                      <IconButton
                        className={classes.blueText}
                        aria-label='Email'
                      >
                        <Videocam />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>

              {/* </Grid> */}
            </Grid>
          ))}
        </div>
        <Divider />
        <Grid
          justifyContent='flex-end'
          spacing={4}
          container
          style={{ padding: '24px' }}
        >
          <Grid item>
            <Typography>Экспертов на странице</Typography>
          </Grid>

          <Grid item>
            <ArrowDropDown className={classes.clickable} />
          </Grid>
          <Grid item>
            <Typography>{`${firstUserIndex + 1}-${lastUserIndex} или ${
              data.length
            }`}</Typography>
          </Grid>
          <Grid item onClick={paginationFirstPage}>
            <SkipPreviousOutlined className={classes.clickable} />
          </Grid>
          <Grid
            item
            onClick={() => {
              paginationPrev(currentPage)
            }}
          >
            <ArrowBackIosSharp className={classes.clickable} />
          </Grid>
          <Grid
            item
            onClick={() => {
              paginationNext(currentPage)
            }}
          >
            <ArrowForwardIosSharp className={classes.clickable} />
          </Grid>
          <Grid item onClick={paginationLastPage}>
            <SkipNextOutlined className={classes.clickable} />
          </Grid>
        </Grid>
      </Paper>
      <Divider className={classes.divider} />
    </div>
  )
}
ExpertsPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ExpertsPage)
