import React from 'react'
import { useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Info page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia?</p>
            <button 
                className="btn"
                onClick={() => history.push('/')}
            >
                Back to todos
            </button>

        </>
    )
}