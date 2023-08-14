document.addEventListener('DOMContentLoaded', function() {
    const ruleLinks = document.querySelectorAll('.rule-link');
    const ruleContents = document.querySelectorAll('.rule-content');

    ruleLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const selectedRule = this.getAttribute('data-rule');

            ruleContents.forEach(function(content) {
                content.classList.remove('active');
            });

            const selectedContent = document.getElementById(selectedRule);
            selectedContent.classList.add('active');
        });
    });
});
