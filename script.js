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
            events: [{ date: '2002', content: 'reedhi smells' }]
        },
        {
            year: 2003,
            events: [{ date: '2003', content: 'Some event in 2003' }]
        },
        {
            year: 2004,
            events: [{ date: '2004', content: 'Some event in 2004' }]
        },
        {
            year: 2005,
            events: [{ date: '2005', content: 'Some event in 2005' }]
        },
        {
            year: 2006,
            events: [{ date: '2006', content: 'Some event in 2006' }]
        },
        {
            year: 2007,
            events: [{ date: '2007', content: 'Some event in 2007' }]
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