import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import ContactList from '../../../components/Contact/ContactList';
import ChatRoom from '../../../components/Chat/ChatRoom';
import styles from './chat-jss';
import {
  fetchChatAction,
  showChatAction,
  sendAction,
  hideDetailAction,
  deleteAction,
} from './reducers/chatActions';
import { fetchAction, searchAction } from '../Contact/reducers/contactActions';
import contactData from '../Contact/api/contactData';
import chatData from './api/chatData';

function Chat(props) {
  //   Redux State
  const dataContact = useSelector((state) => state.contact.contactList);
  const dataChat = useSelector((state) => state.chat.activeChat);
  const chatSelected = useSelector((state) => state.chat.chatSelected);
  const showMobileDetail = useSelector((state) => state.chat.showMobileDetail);
  const keyword = useSelector((state) => state.contact.keywordValue);

  // Dispatcher
  const fetchContactData = useDispatch();
  const fetchChatData = useDispatch();
  const hideDetail = useDispatch();
  const showDetail = useDispatch();
  const search = useDispatch();
  const sendMessage = useDispatch();
  const remove = useDispatch();

  useEffect(() => {
    fetchChatData(fetchChatAction(chatData));
    fetchContactData(fetchAction(contactData));
  }, []);

  const title = brand.name + ' - Chat App';
  const description = brand.desc;
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Typography variant="h4">Чат</Typography>
      <Divider className={classes.divider} />
      <div className={classes.root}>
        <ContactList
          total={dataContact.length}
          itemSelected={chatSelected}
          chatData={dataChat}
          dataContact={dataContact}
          showDetail={(payload) => showDetail(showChatAction(payload))}
          search={(payload) => search(searchAction(payload))}
          keyword={keyword}
        />
        <ChatRoom
          showMobileDetail={showMobileDetail}
          dataChat={dataChat}
          chatSelected={chatSelected}
          dataContact={dataContact}
          sendMessage={(payload) => sendMessage(sendAction(payload))}
          remove={() => remove(deleteAction)}
          hideDetail={() => hideDetail(hideDetailAction)}
        />
      </div>
    </div>
  );
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);
