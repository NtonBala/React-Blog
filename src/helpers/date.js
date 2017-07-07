import moment from 'moment';
import {DEFAULT_DATE_FORMAT} from 'constants/dateFormat';

export const formatDate = (date) => (
    moment(date).format(DEFAULT_DATE_FORMAT)
);
