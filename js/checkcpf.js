    function TestaCPF(document.getElementsById('cTaxPayerID_BR') {

        cTaxPayerID_BR= cTaxPayerID_BR.replace('.', '');
        cTaxPayerID_BR= cTaxPayerID_BR.replace('.', '');
        cTaxPayerID_BR= cTaxPayerID_BR.replace('.', '');
        cTaxPayerID_BR= cTaxPayerID_BR.replace('-', '');

        var Soma;
        var Resto;
        Soma = 0;
        if (cTaxPayerID_BR== "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cTaxPayerID_BR.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cTaxPayerID_BR.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cTaxPayerID_BR.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cTaxPayerID_BR.substring(10, 11))) return false;
        return true;
    }