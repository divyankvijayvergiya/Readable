import Moment from 'moment';

export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export const calculateDate = (date) =>{
  const daysAgo = -(Moment(date).diff(Moment(), 'days'));
  if (daysAgo > 365 ){
    return Moment(date).format('MMM D, YYYY');
  } else if (daysAgo > 30){
    return Moment(date).format('MMM D');
  }
}

export const sortByDate = (list) =>{
  return list.sort((a,b) => a.timestamp < b.timestamp)
}

export const sortByVotes = (list) => {
  return list.sort((a, b) => b.voteScore > a.voteScore)
}
