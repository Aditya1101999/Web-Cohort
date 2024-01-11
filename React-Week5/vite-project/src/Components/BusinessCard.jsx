export function BusinessCard(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h3>Interests</h3>
            <ul>
                {props.interests.map((interest) =>
                <li key={interest}>{interest}</li>
                )}
            </ul>
            <div>
                {/* social media */}
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn</a><br/>
                <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter</a><br/>
   {/* conditional statement  => if any other social media exists then only execute && statament*/}
                {props.otherSocialMedia &&
                <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer">
                {props.otherSocialMedia.label}</a>}
            </div>
        </div>
    )
}