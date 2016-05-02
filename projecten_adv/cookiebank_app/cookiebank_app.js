var cookieBank = (function () {
//private
    //me bevat de naam van onze applicatie, enkel ter info
    var me = "cookieBank";
    //dNu bevat de huidige datum-tijd (tijd van opstarten), kan nuttig zijn
    var dNu = new Date();
    //init haalt de plaatselijke tijd uit de datum
    var init = function () {
        var tijd = dNu.toLocaleTimeString();
        //controleert of het jQuery object daadwerkelijk geladen is met
        // $.fn.jquery : die toont ons de jquery versie die we gebruiken
        console.log($.fn.jquery);
        return me + " opgestart op " + tijd;
    };

//het return object = public
    return {
        init: init
    };
}(jQuery));