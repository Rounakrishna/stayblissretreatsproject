function validateform_simplebooking(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    var guestInfo = 'A';
    var url_data = $(form).attr('action');
    var be_lang = $(form).find('.be-lang').val();
    var ga_data = $(form).find('input[name*="_ga"]').val();
    var child_age = $(form).find('#default_child_age').val();
    var load_availability = $(form).find('#goto_availability').val();
    var currency_code = $(form).find('#currency_code').val();

    if (!be_lang) {
        be_lang = 'en';
    }

    if (!currency_code) {
        currency_code = 'INR';
    }

    if (!child_age) {
        child_age = '5';
    }

    if (!load_availability) {
        load_availability = 'true';
    }

    for (i = 1; i < parseInt($(form).find('#adults_id').val()); i++) {
        guestInfo += ',A';
    }

    for (i = 1; i <= parseInt($(form).find('#children_id').val()); i++) {
        guestInfo += ',' + child_age;
    }

    $(form).find('#guests').val(guestInfo);

    if (load_availability === 'true') {
        currency_code += '#/q';
    }

    url_data += '?hid=' + $(form).find('#property_id').val() + '&lang=' + be_lang + '&cur=' + currency_code + '&guests=' + guestInfo + '&in=' + arrD + '&out=' + depD + '&coupon=' + $(form).find('#promo_code').val()

    if (ga_data) {
        url_data += '&_ga=' + ga_data;
    }

    if ($(form).attr('target') === '_parent') {
        window.open(url_data, "_self");
    } else {
        window.open(url_data);
    }

    return false;
}

function validateform_axisrooms(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_hotelcommerce(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#checkin').val(arrD);
    $(form).find('#checkout').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd-M-yy');
    $depD.datepicker('option', 'dateFormat', 'dd-M-yy');

    return true;
}

function validateform_ibc(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_busyrooms(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // creating form action value
    var adults = $(form).find("#adults_id").val();
    var children = $(form).find("#children_id").val();
    var websiteID = $(form).find('#websiteID').val();

    var formUrl = 'http://api.direct-reservation.net/?websiteID=' + websiteID + '&query={"LanguageCode":"EN","CurrencyCode":"INR","PassengerGroups":[{"adults":' +
        adults + ',"childrenAges":[' + children +
        ']}],"Accommodation":{"EstablishmentIDs":[]},"DateFrom":"' + arrD +
        'T00:00:00.000Z","DateTo":"' + depD +
        'T00:00:00.000Z"}&modules=["Accommodation"]';

    $(form).attr('action', formUrl);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_eglobe(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd-M-yy');
    $depD.datepicker('option', 'dateFormat', 'dd-M-yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;

    $(form).find('#check_in').val(arrD);
    // $(form).find('#check_out').val(depD);
    $(form).find('#number_of_nights').val(days);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_webcrs(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;

    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_verticalbooking(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;

    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    var check_in_day = $.datepicker.formatDate('d', start);
    var check_in_month = $.datepicker.formatDate('m', start);
    var check_in_year = $.datepicker.formatDate('yy', start);

    $(form).find('#gg').val(check_in_day);
    $(form).find('#mm').val(check_in_month);
    $(form).find('#aa').val(check_in_year);
    $(form).find('#number_of_nights').val(days);

    $(form).find('#number_of_nights').val(days);

    return true;
}


function validateform_packago(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_profitrooms(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_resavenue(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'ddmmyy');
    $depD.datepicker('option', 'dateFormat', 'ddmmyy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_reznext(form) {
    return true;
}


function validateform_reztrip(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_staah(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd M yy');
    $depD.datepicker('option', 'dateFormat', 'dd M yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_synxis(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'mm-dd-yy');
    $depD.datepicker('option', 'dateFormat', 'mm-dd-yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    // prepend mobile if mobile site
    var device = $('#device').val();
    if (device == 'mobile') {
        // var url = $(form).attr('action');
        // url = url.replace('://gc', '://mobile');
        $(form).attr('action', 'https://mobile.synxis.com');
    }
    return true;
}


function validateform_synxisnew(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    // prepend mobile if mobile site
    var device = $('#device').val();
    if (device == 'mobile') {
        // var url = $(form).attr('action');
        // url = url.replace('://gc', '://mobile');
        $(form).attr('action', 'https://mobile.synxis.com');
    }
    return true;
}


function validateform_globekey(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;

    var fd = $.datepicker.formatDate('d', start);
    var fm = $.datepicker.formatDate('m', start);
    var fy = $.datepicker.formatDate('yy', start);

    if ($('#device').val() === 'mobile') {
        $(form).find('#fd').remove();
        $(form).find('#fm').remove();
        $(form).find('#fy').remove();
    } else {
        $(form).find('#fd').val(fd);
        $(form).find('#fm').val(fm);
        $(form).find('#fy').val(fy);
    }

    $(form).find('#number_of_nights').val(days);

    return true;
}


function validateform_ihotelier(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'mm/dd/yy');
    $depD.datepicker('option', 'dateFormat', 'mm/dd/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_fastbooking(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'mm/dd/yy');
    $depD.datepicker('option', 'dateFormat', 'mm/dd/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');

    var fromday = $.datepicker.formatDate('d', start);
    var frommonth = $.datepicker.formatDate('m', start);
    var fromyear = $.datepicker.formatDate('yy', start);

    $(form).find('#fromday').val(fromday);
    $(form).find('#frommonth').val(frommonth);
    $(form).find('#fromyear').val(fromyear);

    var today = $.datepicker.formatDate('d', end);
    var tomonth = $.datepicker.formatDate('m', end);
    var toyear = $.datepicker.formatDate('yy', end);

    $(form).find('#today').val(today);
    $(form).find('#tomonth').val(tomonth);
    $(form).find('#toyear').val(toyear);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_fabhres(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'mm/dd/yy');
    $depD.datepicker('option', 'dateFormat', 'mm/dd/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // grunt nopt module type interpretation
    // http://stackoverflow.com/a/18724551/2102830
    // the reason why leading 00 is added to #ibe
    var temp = $(form).find('#ibe').val();
    if (temp.slice(0, 2) != '00') {
        $(form).find('#ibe').val('00' + temp);
    }

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_hotelscloud(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd-mm-yy');
    $depD.datepicker('option', 'dateFormat', 'dd-mm-yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_ezee(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd-mm-yy');
    $depD.datepicker('option', 'dateFormat', 'dd-mm-yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // setting the number of nights
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;
    $(form).find('#number_of_nights').val(days);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_choicehotels(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_bookingdotcom(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'd yy-mm');
    $depD.datepicker('option', 'dateFormat', 'd yy-mm');

    // fetching the date input values
    var arrD = $arrD.val().split(' ');
    var depD = $depD.val().split(' ');

    // setting the hidden fields of form
    $(form).find('#checkin_monthday').val(arrD[0]);
    $(form).find('#checkin_year_month').val(arrD[1]);
    $(form).find('#checkout_monthday').val(depD[0]);
    $(form).find('#checkout_year_month').val(depD[1]);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_confirmedrooms(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    return true;
}


function validateform_hotelogix(form) {
    // // fetching the datepicker dom element
    // var $arrD = $(form).find('.arrival-date-input');
    // var $depD = $(form).find('.departure-date-input');

    // // changing the date format temporarily
    // $arrD.datepicker('option', 'dateFormat', 'M dd, yy');
    // $depD.datepicker('option', 'dateFormat', 'M dd, yy');

    // // fetching the date input values
    // var arrD = $arrD.val();
    // var depD = $depD.val();

    // // setting the hidden fields of form
    // $(form).find('#check_in').val(arrD);
    // $(form).find('#check_out').val(depD);

    // // reverting back the date format
    // $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    // $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;

}


function validateform_djubo(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_sterling(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd/M/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/M/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_resavenuewhitelabelled(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'ddmmyy');
    $depD.datepicker('option', 'dateFormat', 'ddmmyy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_resavenuenew(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'ddmmyy');
    $depD.datepicker('option', 'dateFormat', 'ddmmyy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}


function validateform_axisroomsnew(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_thebookingbutton(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_thelittlehotelier(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    if ($('#device').val() == 'mobile') {
        $(form).find('#check_in').remove();
        $(form).find('#check_out').remove();
    }

    return true;
}


function validateform_simplotel(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // removing chainId if empty
    var temp = $(form).find('#chain_id').val();
    if (temp === '') {
        $(form).find('#chain_id').remove();
    }

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_reznext2(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yymmdd');
    $depD.datepicker('option', 'dateFormat', 'yymmdd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#checkin').val(arrD);
    $(form).find('#checkout').val(depD);


    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_bestwestern(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'yy-mm-dd');
    $depD.datepicker('option', 'dateFormat', 'yy-mm-dd');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    $(form).find('#check_in').val(arrD);
    $(form).find('#check_out').val(depD);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function validateform_travelclick(form) {
    // fetching the datepicker dom element
    var $arrD = $(form).find('.arrival-date-input');
    var $depD = $(form).find('.departure-date-input');

    // changing the date format temporarily
    $arrD.datepicker('option', 'dateFormat', 'mm/dd/yy');
    $depD.datepicker('option', 'dateFormat', 'mm/dd/yy');

    // fetching the date input values
    var arrD = $arrD.val();
    var depD = $depD.val();

    // setting the hidden fields of form
    var start = $arrD.datepicker('getDate');
    var end = $depD.datepicker('getDate');
    var days = (end - start) / 1000 / 60 / 60 / 24;

    $(form).find('#check_in').val(arrD);
    // $(form).find('#check_out').val(depD);
    $(form).find('#number_of_nights').val(days);

    // reverting back the date format
    $arrD.datepicker('option', 'dateFormat', 'dd/mm/yy');
    $depD.datepicker('option', 'dateFormat', 'dd/mm/yy');

    return true;
}

function getGa4Code() {
    var ga4Code = null;
    if (typeof GA4CLIENTID !== 'undefined') {
        ga4Code = GA4CLIENTID;
    }
    return ga4Code;
}

function validateform_enquiry(form) {
    var assetRelPath = $('#assetRelPath').val();
    var actionUrl = $(form).attr('action');
    var pattern = /^((http|https|ftp):\/\/)/;
    var target = $(form).attr('target');

    var linkerParam = '';
    if (typeof ga === 'function') {
        ga(function(tracker) {
            if (tracker) {
                linkerParam = tracker.get('linkerParam');
            } else {
                var trackers = ga.getAll();
                if (trackers.length) {
                    linkerParam = trackers[0].get('linkerParam');
                }
            }
        });
    }
    if (typeof gtag === 'function') {
        var ga4CodeVal = getGa4Code();
        if (ga4CodeVal) {
            linkerParam = '_glCID=' + ga4CodeVal;
        }
    }

    if (!pattern.test(actionUrl)) {
        actionUrl = assetRelPath + actionUrl;
    }

    if (linkerParam) {
        if (actionUrl.indexOf('?') === -1) {
            actionUrl += '?' + linkerParam;
        } else {
            actionUrl += '&' + linkerParam;
        }
    }

    window.open(actionUrl, form.target);

    return false;
}

var timestamp = new Date().getTime() / 1000 + new Date().getTimezoneOffset() * 60;

function init_booking_engine(form) {

    /* SHOW HIDE DEPENDING ON CURRENT HOTEL */
    var hotel_id = $('#hotel_id').val();
    var form_hotel_id = $(form).attr('data-hotel_id');

    if (hotel_id === form_hotel_id) {
        $(form).css('display', 'block');
    }

    var engine = $(form).attr('data-engine');
    if (engine != "enquiry") {
        /* COMMON DATA INIT */
        var $common = $(form).find('.common');

        var lengthOfStay = 1;

        lengthOfStay = parseInt($common.attr('data-lengthOfStay'), 10);

        var checkInDateAttr = $common.attr('data-checkInDate');
        // when checkInDateAttr is today
        var checkInDate = new Date();

        if (checkInDateAttr === 'Tomorrow') {
            checkInDate = new Date(checkInDate.getTime() + (24 * 60 * 60 * 1000));
        } else {
            checkInDate = new Date();
        }

        var arrivalDateSelected = false;
        var arrivalDateInput = $(form).find('.arrival-date-input');
        var departureDateInput = $(form).find('.departure-date-input');

        var timezone = $common.attr('data-timeZone');
        var tzOffset = $common.attr('data-timeOffset');

        //  converting user local time(here, checkindate) according to hotel's timezone

        // check for ie browser
        var isIE = /*@cc_on!@*/ false || !!document.documentMode, // Internet Explorer 6-11
            isEdge = !isIE && !!window.StyleMedia; // Edge 20+
        // Check if Internet Explorer 6-11 OR Edge 20+
        if (!(isIE || isEdge)) {
            if (typeof Intl === 'object' && typeof Intl.NumberFormat === 'function') {
                // toLocaleString with options supported
                var checkInDateString = checkInDate.toLocaleDateString('en-GB', {
                    timeZone: timezone
                });
                //remove special charecters added for human readable format (LTR/RTL markers)
                checkInDateString = checkInDateString.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
            }
        } else {
            // old browsers(mobile android browsers)
            var checkInDateString = new Date((timestamp + parseInt(tzOffset)) * 1000);
        }

        arrivalDateInput.prop("readonly", true).datepicker({
            minDate: checkInDateString,
            dateFormat: 'dd/mm/yy',
            onClose: function(selectedDate) {
                var arrivalDate = arrivalDateInput.datepicker('getDate', '+1d');
                arrivalDate.setDate(arrivalDate.getDate() + lengthOfStay);
                departureDateInput.datepicker('setDate', arrivalDate);
                if (arrivalDateSelected) {
                    departureDateInput.datepicker('show');
                    $("#ui-datepicker-div").css('z-index', '1000');
                    arrivalDateSelected = false;
                }
            },
            onSelect: function() {
                arrivalDateSelected = true;
            },
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginLeft: -(textbox.offsetWidth + 16) + 'px'
                });
            }
        });

        arrivalDateInput.datepicker("setDate", checkInDateString);

        var checkOutDate = arrivalDateInput.datepicker('getDate', '+1d');
        checkOutDate.setDate(checkOutDate.getDate() + lengthOfStay);

        departureDateInput.prop("readonly", true).datepicker({
            minDate: checkOutDate,
            dateFormat: 'dd/mm/yy',
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginLeft: -(textbox.offsetWidth - 58) + 'px'
                });
            }
        });
        departureDateInput.datepicker('setDate', checkOutDate);
    }

    /* SYNXIS FORM INIT */
    // synxis showing cancel_or_modify if selected
    var $com = $(form).find('#cancel_or_modify');
    var $form = $(form);

    // setting the landing_page
    temp = $(form).find('#start').attr('data-meta');
    if (temp == 'results') {
        $form.find('#start').val('availresults');
    }

    // detemining whether to show cancel_or_modify link
    temp = $(form).find('#cancel_or_modify').attr('data-meta');
    if (temp == 'true') {
        $com.removeClass('hidden');
    }

    $com.on('click', function(e) {
        temp = $form.find('#start').val();
        $form.find('#start').val('searchres');
        $form.submit();

        // reverting back the start value
        $form.find('#start').val(temp);
        e.preventDefault();
    });

    temp = $(form).find('select#adults_id').attr('data-meta');
    $form.find('select#adults_id').val(temp).change();

    temp = $(form).find('select#children_id').attr('data-meta');
    $form.find('select#children_id').val(temp).change();

    temp = $(form).find('select#number_of_rooms').attr('data-meta');
    $form.find('select#number_of_rooms').val(temp).change();

    // adding navbar button right arrow
    var btnName = $('.navbar-button').find('.btn-full-width').val();
    $('.navbar-button').find('.btn-full-width').val(btnName);

    // setting new tab for the mobile booking form links
    if ($('#device').val() == 'mobile') {
        $form.removeAttr('target');
    }


    /* GLOBEKEY FORM INIT */
    // globekey showing cancel_or_modify if selected
    temp = $(form).find('#amend_or_cancel').attr('data-meta');
    var $aoc = $('#amend_or_cancel');
    var $ru = $('#registered_users');
    if (temp == 'true') {
        $aoc.removeClass('hidden');
        $ru.removeClass('hidden');
    }

    temp = $(form).attr('target');
    if (temp == '_blank') {
        $aoc.attr('target', '_blank');
        $ru.attr('target', '_blank');
    }


    /* SIMPLOTEL FORM INIT */
    temp = $(form).find('#promo_code').attr('data-meta');
    if (temp == 'true') {
        $(form).find('#promo_code').closest('.hidden').removeClass('hidden');
    }


    /* VISTA TEMPLATE INIT */
    // moving all the cancel links to the .other-link-block
    var $other_link_block = $('.other-link-block');
    // checking if the other link section exists
    if ($other_link_block.length && $com.length) {
        var $cancel_links = $(form).find('.cancel-link').detach().attr('data-hotel_id', form_hotel_id);
        $other_link_block.append($cancel_links);
    }
}


function update_booking_engine_hotels() {
    var $option = $('#booking-engine-groups').find('option:selected');
    var group_id = $option.attr('data-group_id');

    $('#booking-engine-hotels').empty();
    $('#booking-engine-hotels-clone option').each(function() {
        if (group_id === $(this).attr('data-group_id')) {
            $('#booking-engine-hotels').append($(this).clone());
        }
    });
}


function update_booking_engine_forms(phoenixBeFormNew) {
    var $option = $('#booking-engine-hotels').find('option:selected');
    var hotel_id = $option.attr('data-hotel_id');
    $('.form.booking-form').each(function(index) {
        var form_hotel_id = $(this).attr('data-hotel_id');
        if ((hotel_id === undefined && index === 0) || hotel_id === form_hotel_id) {
            $(this).css('display', 'block');

            if (index === 0) {
                if (hotel_id === undefined) {
                    $(this).addClass('no-hotel-selected');
                    if (phoenixBeFormNew) {
                        $(this).css('display', 'none');
                        $(this).find('.btn-full-width').addClass('hidden');
                        if (this.querySelector('.min-price-div')) {
                            var clonedElement = this.querySelector('.min-price-div').cloneNode(true);
                            this.before(clonedElement);
                            $(this).prev().addClass('new-parent-min-price-wrapper');
                        }
                    }
                } else {
                    $(this).removeClass('no-hotel-selected');
                    if (phoenixBeFormNew) {
                        $(this).find('.btn-full-width').removeClass('hidden');
                    }
                }
            }

            var aa = $(this).find(".form-group");

            if (aa.length > 2) {
                $(".vc_open-form-block").show();
                if (phoenixBeFormNew) {
                    $(".vc_open-form-block").removeClass('booking-button');
                }
            } else if (aa.length === 0) {
                $(".vc_open-form-block").hide();
                if (phoenixBeFormNew) {
                    $(".vc_open-form-block").addClass('booking-button');
                }
            }
        } else {
            $(this).css('display', 'none');
        }
    });
}


function init_booking_engine_groups() {
    var hotel_id = $('#hotel_id').val();
    var group_id = 0;

    $('#booking-engine-hotels-clone option').each(function() {
        if (hotel_id === $(this).attr('data-hotel_id')) {
            group_id = $(this).attr('data-group_id');
            return false;
        }
    });

    $('#booking-engine-groups option').each(function() {
        if (group_id === $(this).attr('data-group_id')) {
            $(this).prop('selected', true);
        }
    });
    update_booking_engine_hotels();
}


function init_booking_engine_hotels(phoenixBeFormNew) {
    var hotel_id = $('#hotel_id').val();

    $('#booking-engine-hotels option').each(function() {
        if (hotel_id === $(this).attr('data-hotel_id')) {
            $(this).prop('selected', true);
        }
    });
    update_booking_engine_forms(phoenixBeFormNew);
}


function update_mobile_navbar_buttons() {
    var hotels = {};

    // fetching all the hotel names based on hotel_id
    $('#booking-engine-hotels-clone option').each(function() {
        var hotel_id = $(this).attr('data-hotel_id');
        var hotel_name = $(this).text();
        hotels[hotel_id] = hotel_name;
    });


    $('.modal-body .form.booking-form').each(function() {
        $(this).css('display', 'block');

        var form_hotel_id = $(this).attr('data-hotel_id');
        if (form_hotel_id in hotels) {
            $(this).find('input[type="submit"]').val(hotels[form_hotel_id]);
        }
    });
}


function create_booking_dropdown() {
    var hotels = {};

    // fetching all the hotel names based on hotel_id
    $('#booking-engine-hotels-clone option').each(function() {

        var hotel_id = $(this).attr('data-hotel_id');
        var hotel_name = $(this).text();
        hotels[hotel_id] = hotel_name;
    });

    $('.wtbookbtn').each(function() {
        var $dropdown = $('#booking-dropdown-skel').find('.dropdown').clone();

        $(this).hide();
        $(this).after($dropdown);

        var that = this;
        $(this).find('.form.booking-form').each(function() {
            var form_hotel_id = $(this).attr('data-hotel_id');

            if (form_hotel_id in hotels) {
                var $submit = $(this).find('input[type="submit"]');
                $dropdown.find('.dropdown-name').html($submit.val());
                $submit.val(hotels[form_hotel_id]);
                $dropdown.find('.dropdown-menu').append(this);
                $(this).css('display', 'block');
            }
        });
    });
}


function create_booking_modal_toggle() {
    $('.wtbookbtn').each(function() {
        var $modal_toggle = $('#booking-modal-toggle-skel').find('.booking-modal-toggle').clone();
        $(this).find('.form.booking-form:first').before($modal_toggle);

        var that = this;
        $(this).find('.form.booking-form').each(function() {
            var $submit = $(this).find('input[type="submit"]');
            $modal_toggle.html($submit.val());
            $(this).remove();
        });
    });
}


function toggle_other_links_display() {
    var $option = $('#booking-engine-hotels').find('option:selected');
    var hotel_id = $option.attr('data-hotel_id');

    $('.cancel-link').css('display', 'none');

    $('.cancel-link').each(function() {
        var cancel_link_hotel_id = $(this).attr('data-hotel_id');
        if (hotel_id === cancel_link_hotel_id) {
            $(this).css('display', 'block');
        } else {
            $(this).css('display', 'none');
        }
    });
}


function remove_navbar_modal() {
    $('.mobile-navbar-button').children('a').removeAttr('data-toggle data-target');
}


function submit_mobile_navbar_form(is_chain, is_parent) {
    var hotel_id = $('#hotel_id').val();

    if (!is_chain || is_parent) {
        $('.mobile-navbar-button').find('.booking-form').submit();
    } else {
        $('.form.booking-form').each(function() {
            var form_hotel_id = $(this).attr('data-hotel_id');

            if (hotel_id === form_hotel_id) {
                $(this).submit();
            }
        });
    }
}


function hide_form_fields(form) {
    var $adults = $(form).find('#adults_id');
    var $children = $(form).find('#children_id');
    var $promo = $(form).find('#promo_code');
    var $rooms = $(form).find('#number_of_rooms');

    $adults.parentsUntil('.form-group').closest('.form-group').remove();
    $children.parentsUntil('.form-group').closest('.form-group').remove();
    $promo.parentsUntil('.form-group').closest('.form-group').remove();
    $rooms.parentsUntil('.form-group').closest('.form-group').remove();
}

function getFormattedDates(value) {
    var date = new Date(value);
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return monthNames[date.getMonth()] + ' ' + date.getDate();
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkDate(CheckIn) {
    var today = new Date();
    var cookieCheckInDate = new Date(CheckIn);
    today.setHours(0, 0, 0, 0);
    cookieCheckInDate.setHours(0, 0, 0, 0);
    if (today > cookieCheckInDate) {
        return true;
    } else {
        return false;
    }
}

function createChildrenAgeParams(children_info) {
    var url = '';

    $.each(children_info, function(roomKey, roomObj) {
        $.each(roomObj, function(childKey, ageObj) {
            var rIndex = roomKey.split('_')[1];
            var cIndex = childKey.split('_')[1];

            url += 'cage_' + rIndex + '_' + cIndex + '=' + ageObj.age + '&';
        });
    });

    return url;
}

function setCookieMsg(hotel_id, chain_id) {
    var is_chain = ($('#parent_hotel_id').length && $('#hotel_id').length) ? true : false;
    var is_parent = (is_chain && $('#parent_hotel_id').val() === $('#hotel_id').val()) ? true : false;
    var bookingUrl = $('#bookingUrl').val();
    // let beCookieUrl = $('#bookingUrl').val() += '/static';
    var xd_cookie = xDomainCookie(bookingUrl + "/static", "my.namespace", true);
    var minutesDiff = null;
    var firstName;
    var pastCheckInDate = false;

    if (readCookie('cookiePopupTimer')) {
        var cookieDate = new Date(readCookie('cookiePopupTimer'));
        var now = new Date();

        minutesDiff = (now - cookieDate) / (1000 * 60);
    }

    // show popup either when there is no cookiePopupTimer, or when the 15 mins have passed (after close)
    if (!minutesDiff || minutesDiff > 15) {
        xd_cookie.get('beData', function(cookieVal) {
            if (!cookieVal || cookieVal === "delete") {
                $('#continueBooking').addClass('cb-hide');
            } else {
                $('#continueBooking').removeClass('cb-hide');
                var data = JSON.parse(cookieVal);
                var url = bookingUrl + '/?';
                var content = '';
                var showCybMsg;
                if (is_parent) {
                    showCybMsg = data.searchData && parseInt(data.searchData.chainId) === parseInt(chain_id);
                } else {
                    // for child hotels and single hotel
                    showCybMsg = data.searchData && parseInt(data.searchData.propertyId) === parseInt(hotel_id);
                }
                if (showCybMsg) {

                    if (data.searchData.checkIn) {
                        pastCheckInDate = checkDate(data.searchData.checkIn);
                    }

                    $.each(data.searchData, function(key, value) {

                        if (key !== 'roomId' && key !== 'ratePlanId' && key !== 'packageId' && key !== 'source' && key !== 'currentDate') {
                            //getting data to show in the message
                            if (key === 'checkIn' && !pastCheckInDate) {
                                content += getFormattedDates(value) + ' - ';
                            }

                            if (key === 'checkOut' && !pastCheckInDate) {
                                content += getFormattedDates(value) + ', ';
                            }

                            if (key === 'rooms') {
                                var noOfGuests = 0;

                                for (var i = 0; i < value.length; i++) {
                                    url += 'adults_' + (i + 1) + '=' + parseInt(value[i].adults) + '&';
                                    url += 'children_' + (i + 1) + '=' + parseInt(value[i].children) + '&';
                                    noOfGuests += parseInt(value[i].adults) + parseInt(value[i].children);
                                }
                                var guestLabel = (noOfGuests > 1) ? ' guests' : ' guest';
                                content += noOfGuests + guestLabel;

                                value = value.length; //for url
                            }
                            if (value && value !== "None" && key !== "name") {
                                if (key === 'checkIn' || key === 'checkOut') {
                                    if (!pastCheckInDate) {
                                        url += key + '=' + value + '&';
                                    }
                                } else if (key === 'children_info') {
                                    url += createChildrenAgeParams(value);
                                } else {
                                    url += key + '=' + value + '&';
                                }
                            }
                        }

                    });

                    if (data.booking) {
                        $.each(data.booking, function(key, value) {
                            //add name if present
                            if (key === 'name') {
                                if (value !== 'None') {
                                    firstName = value.split(' ').find(function(text) {
                                        if (text.length > 2 && text.charAt(text.length - 1) !== '.') {
                                            return text;
                                        };
                                    });

                                    if (firstName) {
                                        $('#continueBooking .cb-name').html(firstName + ',');
                                    } else {
                                        $('#continueBooking .cb-name').addClass('cb-hide');
                                    }

                                    url += key + '=' + value + '&';
                                } else {
                                    $('#continueBooking .cb-name').addClass('cb-hide');
                                }
                            }
                            if (key === 'email' && value !== 'None') {
                                url += key + '=' + value + '&';
                            }
                        });
                    }
                    // adding independent_addons in url
                    if (data.independent_addons && data.independent_addons.length > 0) {
                        data.independent_addons.forEach(function(addon) {
                            if (addon.adult_units > 0) {
                                url += 'vaa_' + addon.id + '=' + addon.adult_units + '&';
                            }
                            if (addon.child_units > 0) {
                                url += 'vac_' + addon.id + '=' + addon.child_units + '&';
                            }
                        });
                    }
                    // add roomId and rateplanId, if present
                    if (data.selectedRooms && data.selectedRooms.length > 0) {
                        //only adding for first element, since we need to implement for multiple rooms separately
                        url += 'roomId=' + data.selectedRooms[0].roomId + '&';
                        url += 'ratePlanId=' + data.selectedRooms[0].ratePlanId + '&';
                        url += 'packageId=' + data.selectedRooms[0].packageId + '&';
                    }
                    if (pastCheckInDate || data.isBookingConfirmed) {
                        url += 'cookieReload=false&source=cdc_1';
                    } else {
                        url += 'cookieReload=true&source=cdc_1';
                    }

                    if (typeof ga === 'function') {
                        ga(function(tracker) {
                            if (tracker) {
                                var linkerParam = tracker.get('linkerParam');
                            } else {
                                var trackers = ga.getAll();
                                if (trackers.length) {
                                    var linkerParam = trackers[0].get('linkerParam');
                                }
                            }
                            if (linkerParam) {
                                url += '&' + linkerParam;
                            }
                        });
                    }

                    if (typeof gtag === 'function') {
                        var ga4CodeVal = getGa4Code();
                        if (ga4CodeVal) {
                            url += '&_glCID=' + ga4CodeVal;
                        }
                    }

                    if (pastCheckInDate || data.isBookingConfirmed) {
                        initSiteMessaging(hotel_id, device, is_parent);
                        var wbMsg = "Welcome back, ";
                        if (firstName) {
                            wbMsg += firstName + "!<span style='display: block;font-size: 13px'> It is great to see you again</span>";
                        }

                        $('#continueBooking .cb-name, #continueBooking .cb-book-details, #continueBooking .cb-hotel-name').hide();
                        $('#continueBooking .cb-heading').html(wbMsg);
                    } else {
                        var book_hotel_id = parseInt(data.searchData.propertyId);
                        var book_hotel_name = "";
                        if ($('#booking-engine-hotels-clone option')) {
                            $('#booking-engine-hotels-clone option').filter(function() {
                                if ($(this).attr('data-hotel_id') == book_hotel_id) {
                                    book_hotel_name = this.innerHTML;
                                }
                            });
                        }
                        $('#continueBooking .cb-hotel-name').html(book_hotel_name);
                        $('#continueBooking .cb-book-details').html(content);
                        initSiteMessaging(book_hotel_id, device, is_parent);

                    }

                    $('#continueBooking .cb-wrap').click(function() {
                        window.open(url);
                    });

                    $('#continueBooking .close').click(function() {
                        document.cookie = 'cookiePopupTimer=' + (new Date());

                        $('#continueBooking').addClass('cb-hide');
                    });
                } else {
                    $('#continueBooking').addClass('cb-hide');
                }
            }
        }, 1000); // setting the cookie expiry to 1000 days
    }
}


function numberWithCommas(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setMinPriceMessage(msg, html, form) {
    if ($(form).closest('.wtbookbtn').length === 0) {
        if ($(form).find('.min-room-price').attr('type') === 'hidden') {
            $(form).find('input:submit').attr('data-tooptip', 'tooltip');
            $(form).find('input:submit').attr('data-placement', 'bottom');
            $(form).find('input:submit').attr('title', msg);
        }
        $(form).find('.min-room-price').after(html);
    }
}


function setChainMobileMinPriceMessage(hotel_id, form) {

    var menuBookBtn = $('.mobile-navbar-button .navBtnBorder'),
        minPriceDiv = form.find('.min-price-div')
        .clone()
        .toggleClass('min-price-div nav-min-price-div');

    $(menuBookBtn).append(minPriceDiv);
}

function initSiteMessaging(hotel_id, device, is_parent, locItem) {
    var bookingUrl = $('#bookingUrl').val();
    if (hotel_id) {
        $.ajax({
            url: bookingUrl + '/content/' + hotel_id + '/data',
            method: 'GET',
            success: function(res) {
                if (res.data.minimum_baserate && res.data.message_html) {
                    // locItem is being used for card based mega-menu only
                    if (locItem) {
                        $(locItem).find('.min-price-div').remove(); // remove already existing, if any
                        var minPriceElement = "<div class='min-price-div'> <span class='general-msg'>From </span><span class='price-msg'>" + numberWithCommas(Math.ceil(res.data.minimum_baserate)) + "</span> <span  class='general-msg'>" + res.data.currency_code + "/Night</span> </div> ";
                        $(locItem).find(".min-price-wrapper").after(minPriceElement);
                    } else {
                        $('#continueBooking .cb-room-price').html(res.data.message_html);
                    }
                }
            }
        });
    }
}

function formInitSiteMessaging(hotel_id, device, is_parent, is_chain, locItem) {
    /* To avoid price getting changed due to booking form pop-up selection */
    var currentSiteHotel_id = $('#hotel_id').val();
    var bookingUrl = $('#bookingUrl').val();
    if (is_chain) {
        var form = $('form[data-hotel_id="' + hotel_id + '"]').first(),
            beEngine = $(form).attr('data-engine');
    } else {
        var form = $('#booking-form'),
            beEngine = $(form).attr('data-engine');
    }
    if (beEngine === 'simplotel' && hotel_id) {
        $.ajax({
            url: bookingUrl + '/content/' + hotel_id + '/data',
            method: 'GET',
            success: function(res) {
                if (res.data.minimum_baserate) {
                    var msg = "From " + numberWithCommas(Math.ceil(res.data.minimum_baserate)) + " " + res.data.currency_code + "/Night";
                    $('.min-room-price').attr("type", "hidden");
                    $(form).find('.min-price-wrapper').show();

                    var html = "<div class='min-price-div'> <span class='general-msg'>From </span><span class='price-msg'>" + numberWithCommas(Math.ceil(res.data.minimum_baserate)) + "</span> <span  class='general-msg'>" + res.data.currency_code + "/Night</span> </div> ";

                    $('.min-price-div').remove(); //remove if any present
                    setMinPriceMessage(msg, html, form);
                    if (is_chain && !is_parent && device === 'mobile' && currentSiteHotel_id.toString() === hotel_id.toString()) {
                        setChainMobileMinPriceMessage(hotel_id, form);
                    }

                } else {
                    $(form).find('.min-price-wrapper').hide();
                }
            }
        });
    } else {
        $(form).find('.min-price-wrapper').hide();
    }
}

function init() {
    var device = $('#device').val();
    var is_chain = ($('#parent_hotel_id').length && $('#hotel_id').length) ? true : false;
    var is_parent = (is_chain && $('#parent_hotel_id').val() === $('#hotel_id').val()) ? true : false;
    var is_common = ($('#template_type').length && $('#template_type').val() === 'common') ? true : false;
    var is_same_be = true;
    var is_phoenix = ($('body.phoenix').length) ? true : false;
    var book_button = ($('.abs_parent_btn_wrapper').length) ? true : false;
    var engine = '';
    var hotel_id = '';
    var chain_id = $('#chain_id').val();
    var websiteMessagingStatus = $('#websiteMessagingStatus').val();
    var phoenixBeFormNew = ($('#phoenixBeFormNew').val() === 'True') ? true : false;

    if (is_chain && !chain_id) {
        chain_id = $('#parent_hotel_id').val();
    }

    if (websiteMessagingStatus === 'True') {
        if (is_parent) {
            var $option = $('#booking-engine-hotels').find('option:selected');
            if ($option.length > 0) {
                hotel_id = $option.attr('data-hotel_id');
                formInitSiteMessaging(hotel_id, device, is_parent, is_chain);
                setCookieMsg(hotel_id, chain_id);
            }
        } else {
            hotel_id = $('#hotel_id').val();
            formInitSiteMessaging(hotel_id, device, is_parent, is_chain);
            setCookieMsg(hotel_id, chain_id);
        }
    }


    // initialising all booking engines
    $('.form.booking-form').each(function() {
        init_booking_engine(this);

        // checking whether all the booking engines are the same
        if (engine === '' && !is_phoenix) {
            engine = $(this).attr('data-engine');
        }

        if (engine.length && engine !== $(this).attr('data-engine')) {
            is_same_be = false;
        }
    });

    // preventing browser from restoring values
    (function() {
        var groups = document.getElementById('booking-engine-groups');
        var hotels = document.getElementById('booking-engine-hotels');
        if (groups !== null && hotels !== null) {
            groups.setAttribute('readonly', 'true');
            hotels.setAttribute('readonly', 'true');
            window.addEventListener('pageshow', function() {
                groups.removeAttribute('readonly');
                hotels.removeAttribute('readonly');
            })
        }
    })();

    if (is_chain && device === 'desktop') {
        // below function calls must be in the same order
        update_booking_engine_hotels();
        update_booking_engine_forms(phoenixBeFormNew);
        init_booking_engine_groups();
        init_booking_engine_hotels(phoenixBeFormNew);
        toggle_other_links_display();
    }

    if (is_chain && device === 'mobile' && is_common) {
        // below function calls must be in the same order
        update_booking_engine_hotels();
        update_booking_engine_forms();
        init_booking_engine_groups();
        init_booking_engine_hotels();
    } else if (is_chain && device === 'mobile') {
        update_mobile_navbar_buttons();
    }


    if (is_parent && device === 'desktop' && is_common) {
        if (is_same_be && engine === 'simplotel') {
            // do nothing
        } else {
            if (!book_button) {
                create_booking_modal_toggle();
            }
        }
    } else if (is_parent && device === 'desktop') {
        create_booking_dropdown();
    }

    if (is_parent && device === 'mobile') {
        if (is_same_be && engine === 'simplotel') {
            // do nothing
        } else {
            if (!book_button) {
                create_booking_modal_toggle();
            }
        }
    }


    // if its phoenix single hotel 

    var listOfHotelID = $('#hotel_id').val();
    var CHATWAL_HOTEL_ID = ["6599"];
    if (!CHATWAL_HOTEL_ID.includes(listOfHotelID)) {
        if (!is_chain && is_phoenix && device === 'mobile') {
            remove_navbar_modal();
            $('.mobile-navbar-button').click(function() {
                $('.mobile-navbar-button').find('.booking-form').submit();
            });
        }
    }
    // removing navbar modal button if all BE's are the same
    if (device === 'mobile' && is_chain && is_same_be && engine === 'simplotel') {
        remove_navbar_modal();
    }


    /* Handling booking engine events */
    $('#booking-engine-groups').on('change', function() {
        update_booking_engine_hotels();
        update_booking_engine_forms(phoenixBeFormNew);
        toggle_other_links_display();
        if (websiteMessagingStatus === 'True') {
            formInitSiteMessaging($('#booking-engine-hotels').find('option:selected').attr('data-hotel_id'), device, is_parent, is_chain);
        }
    });

    $('#booking-engine-hotels').on('change', function() {
        update_booking_engine_forms(phoenixBeFormNew);
        toggle_other_links_display();
        if (websiteMessagingStatus === 'True') {
            formInitSiteMessaging($(this).find('option:selected').attr('data-hotel_id'), device, is_parent, is_chain);
        }
    });

    if (device === 'desktop' && is_chain && is_common) {
        $('.booking-modal-toggle').on('click', function() {
            /* Ignoring model append if explorer_chain has resv_button */
            if (!$('.js-nav-booking-form .resv_button').length) {
                $('#hotelBookModal .booking-form-wrapper').append($('#bookingForm'));
            }
            /* for explorer_chain append form if model is emptyin homepage */
            if (!$('.for-homepage #resv-form .booking-form-wrapper').find('#bookingForm').length) {
                $('#resv-form .booking-form-wrapper').append($('#bookingForm'));
            }
        });

        $('#hotelBookModal').on('hidden.bs.modal', function() {
            $('#collapseOne').find('.panel-body').append($('#bookingForm'));
        });
    }


    // Handling mobile navbar Book button clicks
    if (device === 'mobile' && ((!is_chain && !is_common) || (is_chain && is_common && is_same_be && engine === 'simplotel'))) {
        $('.mobile-navbar-button').click(function() {
            submit_mobile_navbar_form(is_chain, is_parent);
        });
    }


    /* Hiding some fields from chain form since
     * promotion slider covers Book Now button
     */
    $('.form.booking-form').each(function() {
        if (is_chain && device === 'desktop' && !is_common && !phoenixBeFormNew) {
            hide_form_fields(this);
        }
    });



    /* Google analytics event tracking */
    $('.booking-form').submit(function(e) {
        e.preventDefault();
        e.stopPropagation();

        // set vars
        var form = this;
        var formSubmitted = false;
        var engine = $(form).attr('data-engine');
        var path = window.location.pathname;

        // updating language id for vertical booking engine
        if (engine === "verticalbooking") {
            var vbLangMaping = {
                    'en': 'eng',
                    'fr': 'fra',
                    'it': 'ita',
                    'de': 'deu',
                    'fr': 'fra',
                    'ru': 'rus',
                    'nl': 'dut',
                    'pt': 'por',
                    'fi': 'fin',
                    'el': 'ell',
                    'zh': 'chi',
                    'ko': 'kor',
                    'ja': 'jpn',
                    'th': 'tha',
                    'vi': 'vie',
                    'bg': 'bul',
                    'no': 'nor',
                    'ro': 'ron',
                    'hu': 'hun',
                    'sk': 'slo',
                    'cs': 'cze',
                    'da': 'dan',
                    'ca': 'cat'
                },
                beLang = $(form).find('.be-lang'),
                beLangVal = $(beLang).val();
            if (vbLangMaping[beLangVal]) {
                $(beLang).val(vbLangMaping[beLangVal]);
            } else {
                $(beLang).val('eng');
            }
        }

        // updating language id for The Booking Button engine
        if (engine === "thelittlehotelier") {
            var lhLangMaping = {
                    'zh': 'zh-CN'
                },
                beLang = $(form).find('.be-lang'),
                beLangVal = $(beLang).val();
            if (lhLangMaping[beLangVal]) {
                $(beLang).val(lhLangMaping[beLangVal]);
            }
        }

        // checking if validation function exists
        var validateform_engine = window['validateform_' + String(engine)];
        if (typeof validateform_engine !== 'function') {
            return;
        }

        // delaying formsubmit for google analytics event tracking
        // setTimeout(submitForm(e), 1000);

        // submitting data to google analytics
        if (typeof ga === 'function') {
            ga(function(tracker) {
                if (tracker) {
                    var linkerParam = tracker.get('linkerParam');
                } else {
                    var trackers = ga.getAll();
                    if (trackers.length) {
                        var linkerParam = trackers[0].get('linkerParam');
                    }
                }
                if (linkerParam) {
                    $(form).find('input[name*="_ga"]').remove();
                    $(form).append('<input type="hidden" name="_ga" value="' + linkerParam.split('_ga=')[1] + '">');
                }
            });
            ga('send', {
                hitType: 'event',
                eventCategory: 'bookNow',
                eventAction: 'formSubmit',
                eventLabel: path,
                hitCallback: submitForm(e)
            });
        } else {
            submitForm(e);
        }

        // submitting data to GA4
        if (typeof gtag === 'function') {

            // ga(function (tracker) {
            //     if (tracker) {
            //         var linkerParam = tracker.get('linkerParam');
            //     } else {
            //         var trackers = ga.getAll();
            //         if (trackers.length) {
            //             var linkerParam = trackers[0].get('linkerParam');
            //         }
            //     }
            //     if (linkerParam) {
            //         $(form).find('input[name*="_ga"]').remove();
            //         $(form).append('<input type="hidden" name="_ga" value="' + linkerParam.split('_ga=')[1] + '">');
            //     }
            // });

            var ga4CodeVal = getGa4Code();
            if (ga4CodeVal) {
                $(form).find('input[name*="_glCID"]').remove();
                $(form).append('<input type="hidden" name="_glCID" value="' + ga4CodeVal + '">');
            }

            gtag('event', 'formSubmit', {
                'event_category': 'bookNow',
                'event_label': path,
                'event_callback': submitForm(e)
            });
        }

        // submitForm will be called after delay
        function submitForm(e) {
            if (!formSubmitted) {
                formSubmitted = true;
                var valid = validateform_engine(form);

                if (valid) {
                    form.submit(e);
                }
            }
        }
    });

    /* Mobile call button click tracking */
    if (device === 'mobile') {
        $('.nav-wrap a.tel').click(function(e) {
            e.preventDefault();
            e.stopPropagation();

            // set vars
            var link = this;
            var linkClicked = false;
            var linkHref = $(link).attr('href');
            var path = window.location.pathname;

            // delaying click for google analytics event tracking
            setTimeout(clickLink, 1000);

            // submitting data to google analytics
            if (typeof ga === 'function') {
                ga(function(tracker) {
                    if (tracker) {
                        var linkerParam = tracker.get('linkerParam');
                    } else {
                        var trackers = ga.getAll();
                        if (trackers.length) {
                            var linkerParam = trackers[0].get('linkerParam');
                        }
                    }
                    if (linkerParam) {
                        $(form).find('input[name*="_ga"]').remove();
                        $(form).append('<input type="hidden" name="_ga" value="' + linkerParam.split('_ga=')[1] + '">');
                    }
                });
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'mobileCall',
                    eventAction: 'linkClick',
                    eventLabel: path,
                    hitCallback: clickLink
                });
            }

            if (typeof gtag === 'function') {
                var ga4CodeVal = getGa4Code();
                if (ga4CodeVal) {
                    $(form).find('input[name*="_glCID"]').remove();
                    $(form).append('<input type="hidden" name="_glCID" value="' + ga4CodeVal + '">');
                }
                // this should send the data to hotel's GA4 and the common tracker both acc to the doc - https://developers.google.com/tag-platform/gtagjs/routing
                gtag('event', 'linkClick', {
                    'event_category': 'mobileCall',
                    'event_label': path,
                    'event_callback': clickLink
                });
            }

            // clickLink will be called after delay
            function clickLink() {
                if (!linkClicked) {
                    linkClicked = true;
                    window.location.href = linkHref;
                }
            }
        });
    }

    /* Tracking contact form submits */
    $('.wtformjson .btn-forms').click(function() {
        var path = window.location.pathname;

        // submitting data to google analytics
        if (typeof ga === 'function') {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contactForm',
                eventAction: 'formSubmitClick',
                eventLabel: path
            });
        }

        if (typeof gtag === 'function') {
            // this should send the data to hotel's GA4 and the common tracker both acc to the doc - https://developers.google.com/tag-platform/gtagjs/routing
            gtag('event', 'formSubmitClick', {
                'event_category': 'contactForm',
                'event_label': path
            });
        }

    });
}

init();


$(window).on('load', function() {
    // initiating preload only on homepage of parent or child hotels
    var lastCharPathname = window.location.pathname.slice(-1);
    var engine = '';
    var bookingUrl = $('#bookingUrl').val();
    //download and execute exit intent script from booking engine code
    $.getScript(bookingUrl + '/static/widgets/exitIntent.js', function() {

    })
});