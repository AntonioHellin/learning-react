import './App.css'

export function App (){
    return (
        <article className='tn-followCard'>
            <header className='tn-followCard-header'>
                <img 
                    className='tn-followCard-avatar'
                    alt="El avatar de midudev" 
                    src="https://unavatar.io/midudev"/>
                <div className='tn-followCard-info'>
                    <strong>Miguel Angel Duran</strong>
                    <span className='tn-followCard-infoUserName'>@midudev</span>
                </div>
            </header>
            <aside>
                <button className='tn-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}