const timeline = document.querySelector('.timeline');

const timelineData = [
    {
        date: '2001-12-02',
        content: 'A young boy was born',
    },
    {
        date: '2023-11-15',
        content: 'Built my first simple web app.',
    },
    {
        date: '2023-12-01',
        content: 'Contributed to an open-source project.',
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