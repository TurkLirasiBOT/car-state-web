
document.getElementById("ticket-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var webhookUrl = "https://discord.com/api/webhooks/1124085578363830312/JnfuHxhCQCex5Z6_Mayk1Ue31LbArA3v5vNDjb6e-Y0YYap2Yb2u3h1j7o7zoSsGs083";

    var webhookData = {
        content: "Bir kişi yeni ticket gönderdi!",
        embeds: [
            {
                title: "Ticket Bilgileri",
                fields: [
                    { name: "Gönderen", value: sender },
                    { name: "Konu", value: subject },
                    { name: "Mesaj", value: message }
                ],
                color: 16737792 // 
            }
        ]
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
    })
    .then(function (response) {
        // İstek başarılıysa
        if (response.ok) {
            alert("Ticket başarıyla gönderildi!");
        } else {
            alert("Ticket gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    })
    .catch(function (error) {
        console.error("Bir hata oluştu:", error);
        alert("Ticket gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    });
});
