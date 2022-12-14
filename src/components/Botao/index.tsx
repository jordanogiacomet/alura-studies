import React from 'react';
import style from './Botao.module.scss'


class Botao extends React.Component <{name:string, type?: "button" | "submit" | "reset" | undefined, onClick?: ()=>void}>{
    render(): React.ReactNode  {
        const {type = "button", onClick} = this.props;

        return(
            <button onClick={onClick} type={type}className={style.botao}>
                {this.props.name}
            </button>
        )
    }
}

export default Botao;