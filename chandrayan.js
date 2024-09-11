document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.querySelector('.timeline-content').classList.add('active');
        });
        item.addEventListener('mouseout', function () {
            this.querySelector('.timeline-content').classList.remove('active');
        });
    });
});
