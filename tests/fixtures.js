const box = (parentId, tags) => ({
    type: 'box',
    sides: {
        front: {
            title: `box_title_${(new Date()).getTime()}`
        }
    },
    parent: parentId,
    cratedAt: (new Date()).getTime(),
    tags: tags || []
})

const simple = (frontContent, backContent, parentId) => ({
    type: 'simple',
    sides: {
        front: {
            content: frontContent,
        },
        back: {
            content: backContent
        }
    },
    parent: parentId,
    cratedAt: (new Date()).getTime(),
    tags: []
})