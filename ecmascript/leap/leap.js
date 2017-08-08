class Year {
  constructor(x) {
    this.year = x;
  }

  isLeap() {
    return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
  }
}

export default Year;