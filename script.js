document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            year: 2001,
            events: [
                { date: 'December', content: 'A young orty was born', image: 'assets/images.jpeg' },
                { date: 'December', content: 'two events in one year' }
            ]
        },
        {
            year: 2002,
            events: []
        },
        {
            year: 2003,
            events: []
        },
        {
            year: 2004,
            events: []
        },
        {
            year: 2005,
            events: []
        },
        {
            year: 2006,
            events: []
        },
        {
            year: 2007,
            events: []
        },
        {   
            year: 2025,
            events: [{ date: 'March', content: 'Just started this website!'}]
        }
    ];

    const timeline = document.querySelector('.timeline');
    let isLeft = true;

    timelineData.forEach(yearData => {
        const yearDiv = document.createElement('div');
        yearDiv.classList.add('timeline-year');

        const yearLabel = document.createElement('div');
        yearLabel.classList.add('year');
        yearLabel.textContent = yearData.year;
        yearDiv.appendChild(yearLabel);

        yearData.events.forEach(event => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.classList.add(isLeft ? 'left' : 'right');

            const timelineContent = document.createElement('div');
            timelineContent.classList.add('timeline-content');

            const date = document.createElement('div');
            date.classList.add('date');
            date.textContent = event.date;

            const content = document.createElement('p');
            content.textContent = event.content;

            timelineContent.appendChild(date);
            timelineContent.appendChild(content);

            if (event.image) {
                const img = document.createElement('img');
                img.src = event.image;
                img.classList.add('event-image');
                timelineContent.appendChild(img);
            }

            timelineItem.appendChild(timelineContent);
            yearDiv.appendChild(timelineItem);
        });

        isLeft = !isLeft;
        timeline.appendChild(yearDiv);
    });
});