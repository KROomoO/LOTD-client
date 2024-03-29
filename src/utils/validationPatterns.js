const validationPatterns = {
    emailRegex: /^[A-Za-z\d@]{4,25}$/,
    memberIdRegex: /^[A-Za-z\d@]{4,25}$/,
    passwordRegex:
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,20}$/,
    nicknameRegex: /^[a-zA-Z0-9가-힣]{2,16}$/,
    realnameRegex: /^[a-zA-Z가-힣]{2,}$/,
    // ageRegex: /^(?:[1-9]|[1-9][0-9])$/,
};

export default validationPatterns;
