document.addEventListener("DOMContentLoaded", function() {
    var ruleForm = document.getElementById("rules-form");
    var ruleSelect = document.getElementById("rule-select");
    var ruleContent = document.getElementById("rule-content");

    ruleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var selectedRule = ruleSelect.value;
        displayRuleContent(selectedRule);
    });

    function displayRuleContent(rule) {
        var ruleTitle = getRuleTitle(rule);
        var ruleDescription = getRuleDescription(rule);

        if (ruleTitle && ruleDescription) {
            ruleContent.innerHTML = "<h2>" + ruleTitle + "</h2><p>" + ruleDescription + "</p>";
            ruleContent.classList.remove("hidden");
        }
    }

    function getRuleTitle(rule) {
        switch (rule) {
            case "1":
                return "Oyun kuralları";
            case "2":
                return "Oyun Nasıl Oynanıyor";
            case "3":
                return "Bilgilendirme";
            case "4":
                return "Legal production";
            case "5":
                return "YAKINDA";
            default:
                return "";
        }
    }

    function getRuleDescription(rule) {
        switch (rule) {
            case "1":
                return "Farklı bir proje yerine bu oyunu tercih ettik normalde başak bir proje olarak yer alacaktık ama bu oyun fikri bizi  daha hoş ettiği için bu oyuna başlamaya karar verdik ve her gün güncelleme yapacağımız için mutluyuz.";
            case "2":
                return "Oyunun güncellemeleri hakkında bilgil vereceğiz ama çok yakında";
            case "3":
                return "Çok yakında sizler ile birlikte olacağız";
            case "4":
                return "YAGINDA";
            case "5":
                return "Kural 5 Açıklaması";
            default:
                return "";
        }
    }
});
