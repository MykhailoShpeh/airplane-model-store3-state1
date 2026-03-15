import React, { Component } from "react";
import css from '@/components/App/Counter.module.css';

//! Звичайний компонент
// export function Counter() {
// return (
//     <div className={css.counter}>
//         <span className={css.counterValue}>0</span>
//         <div className={css.counterControls}>
//             <button className={css.buttonIncrement}>+ 1</button>
//             <button className={css.buttonDecrement}>- 1</button>
//         </div>
//     </div>
//     );
// };


//! Компонент-клас
export class Counter extends Component {
    //! Перерендер компонентів відбувається у двох випадках:
    //! 1.Коли до них приходять нові props
    //! 2.Коли змінюється state ✅

    //! Дефолтні значення props
    static defaultProps = {
        initialValue: 9,
    }

    //todo: var.1 - створення об'єкта state
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 5,
    //     }
    // };

    //todo: var.2 - створення об'єкта state
    state = {
        // value: 5,
        //! Початковий стан лічильника з props
        value: this.props.initialValue,

    };

    //todo     1.7. Оновлення state:
    //! ❗️❗️❗️ ❌ Так не можна робити!!!!
    // this.state.value = 6;
    
    //! ✅ Так треба робити для створення НОВОГО ЗНАЧЕННЯ.
//    this.setState({ value: 9 });

    //!Передача події на кнопку з методом класу
    // handleIncrement = () => {
    //     console.log("+1");
    // };

    handleIncrement = (event) => {
        // console.log("event:", event);
        // console.log("event.target:", event.target);
        // console.log("event.type:", event.type);
        // this.setState({ value: 9 })

        //! Оновлення значення від ПОПЕРЕДНЬОГО
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };


    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    };

    render() {
        return (
            <div className={css.counter} >
                <span className={css.counterValue}>{this.state.value}</span>
                <div className={css.counterControls}>
                    <button
                        className={css.buttonIncrement}
                        // onClick={() => { console.log("+1") }}
                        onClick={this.handleIncrement}
                    >
                        + 1
                    </button>
                    <button
                        className={css.buttonDecrement}
                        // onClick={() => { console.log("-1") }}
                        onClick={this.handleDecrement}
                    >
                        - 1
                    </button>
                </div>
            </div>
        )
    };
};

