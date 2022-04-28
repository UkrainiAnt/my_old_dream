export class FieldValidator {
  static isNotEmpty(val: string) {
    return !!val;
  }
  static isEmail(val: string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
  }

  static isLength(min: number = 0, max: number = 100000) {
    return (val: string) => val.length > min && val.length < max;
  }

  static isPhoneNumber(val: string) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(val);
  }
}

export default FieldValidator;
