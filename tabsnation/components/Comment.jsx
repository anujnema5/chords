import React from 'react'
import Giscus from '@giscus/react';

const Comment = () => {
    return (
        <div className='px-6'>
            <Giscus
                id="comments"
                repo="anujnema5/chords"
                repoId="R_kgDOJjjNSA"
                category="Q&A"
                categoryId="DIC_kwDOJjjNSM4CWu9r"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="dark_dimmed"
                lang="en"
                crossorigin="anonymous"
                loading="lazy"
            />
        </div>
    )
}

export default Comment