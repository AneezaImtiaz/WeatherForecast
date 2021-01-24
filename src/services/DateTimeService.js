
export default class DateTimeService {
  static getDate(date) {
    return new Date(date).toLocaleDateString('en-US').replaceAll("/", ".");
  }

  static getTime(time) {
    return new Date(time).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric', hour12: true});
  }
}
