import React from 'react';

const RichText = ({iteraction}) =>(

    (iteraction != null) && 
    (iteraction.raw.children.map((a,b) => <p key={b}>{ a.children.map((x, j) => 
        x.text ? (
        (x.italic && x.bold ? <i key={j}><b>{x.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</b></i> : 
        (x.bold ? <b key={j}>{x.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</b> : 
        (x.italic ? <i key={j}>{x.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</i> : 
        x.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')))))
        
        : 
        
        x.href && x.children.map((z,q) => <a key={q} target="_blank" href={x.href}>{(z.italic && z.bold ? <i key={j}><b>{z.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</b></i> : 
        (z.bold ? <b key={j}>{z.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</b> : 
        (z.italic ? <i key={j}>{z.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0')}</i> : 
        z.text.replace(/ ([a-zA-Z]) /g, ' $1' + '\u00A0'))))}</a>
        
        ))}</p>))
    
    
    )

export default RichText