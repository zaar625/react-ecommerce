//일반 숫자 콤마(,) 구분자 넣기
const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default numberWithCommas