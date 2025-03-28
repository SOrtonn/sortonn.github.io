const timeline = document.querySelector('.timeline');

const timelineData = [
    {
        date: '2nd December 2001',
        content: 'A young orty was born',
    },
    {
        date: '2023-11-15',
        content: 'reedhi smells',
    },
    {
        date: '2023-12-01',
        content: 'reedhi fart monsta',
    },
    // Add more timeline entries here
];

timelineData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');

    const timelineContent = document.createElement('div');
    timelineContent.classList.add('timeline-content');

    const date = document.createElement('div');
    date.classList.add('date');
    date.textContent = item.date;

    const content = document.createElement('p');
    content.textContent = item.content;

    timelineContent.appendChild(date);
    timelineContent.appendChild(content);
    timelineItem.appendChild(timelineContent);
    timeline.appendChild(timelineItem);
});