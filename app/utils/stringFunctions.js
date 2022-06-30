const NOT_SPECIFIED = 'Не заполнено';

export function getFullName(firstName, lastName) {
  if (!firstName && !lastName) return 'Имя не заполнено';
  return `${firstName || ''} ${lastName || ''}`.trim();
}

export function getBirthdateString(birthdate) {
  if (!birthdate) return NOT_SPECIFIED;
  // TODO: Добавить форматирование даты рождения
  return birthdate;
}

export function getFormatPhone(phone) {
  if (!phone) return NOT_SPECIFIED;
  return `${phone[0]}(${phone.substring(1, 4)})-${phone.substring(
    4,
    7
  )}-${phone.substring(7, 9)}-${phone.substring(9)}`;
}

export function getFullRequisitesString(requisites) {
  if (!requisites) return NOT_SPECIFIED;
  const {
    title,
    legal_address,
    mailing_address,
    inn,
    kpp,
    settlement_account,
    bik,
    correspondent_account,
    director,
  } = requisites;

  const requisitesArray = [];
  if (title) requisitesArray.push(title);
  if (legal_address) requisitesArray.push(legal_address);
  if (mailing_address) requisitesArray.push(mailing_address);
  if (inn || kpp) {
    requisitesArray.push(
      `${inn && 'ИНН'}${inn && kpp && '/'}${kpp && 'КПП'} ${inn || ''}${
        inn && kpp && '/'
      }${kpp || ''}`.trim()
    );
  }
  if (bik) requisitesArray.push(`БИК ${bik}`);
  if (settlement_account) requisitesArray.push(`Р/С ${settlement_account}`);
  if (correspondent_account)
    requisitesArray.push(`К/С ${correspondent_account}`);
  if (director) requisitesArray.push(`Генеральный директор ${director}`);

  if (requisitesArray.length === 0) return NOT_SPECIFIED;

  return requisitesArray.join(', ');

  /*
  Общество с ограниченной ответственностью «Весна»,
  23456, г. Москва, ул. Подвойского, д. 14, стр. 7,
  123456, г. Москва, ул. Подвойского, д. 14, стр. 7
  ИНН/КПП 7712345678/779101001,
  БИК 044521234,
  Р/С 40702810123450101230,
  К/С 30101234500000000225,
  Генеральный директор Петров Сергей Петрович
  */
}
