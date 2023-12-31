import { Component } from 'react';

export class ToDoItem extends Component {
    state = {
        icon: '☑️',
    }

        // to cross input and change icon state
        doneTask = (e) => {
            if(e.detail===2){
            const li = e.target;
            li.classList.add('crossed');
            this.setState({icon:'✅'});
            }  
        };
    
    render() {
        const { item,index } = this.props
        
        return (
                <li onClick={this.doneTask} key={index}>
                    <span> {this.state.icon} </span>
                    {item}
                </li> 
        )
    }
}

export class ToDoList extends Component{
    state = {
        userInput: "",
        toDoList: [],
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }

    // to input items and add to the list
    addItem(input) {
        // rule to avoid blank inputs
        if(input===""){
            alert("Please enter a task")
        } else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ""})
        }
    }

    // to remove all items from the list
    deleteItem(){
        let listArray = this.state.toDoList;
        listArray = []; 
        this.setState({toDoList: listArray});
    }

    // to enter input with pressing ENTER button
    onSubmitEvent(e){
        e.preventDefault();
    }

    render() {
        return(
            <div className='container'>
                {/* to enter input with pressing ENTER button - add form with onSubmit function */}
                <form className='container' onSubmit={this.onSubmitEvent}>
                    <input placeholder='Add your tasks here' type='text' 
                    // onChange={this.onChangeEvent}
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                    />
                    <div>
                        <button className='btn-add' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    </div>
                    <p className='note-text'>Double click to complete the task</p>
                    <ul className='list'>

                        {this.state.toDoList.map((item,index) => (
                            <ToDoItem key ={index} item={item}/>
                        ))}
                    </ul>
                    <div>
                        {/* adding delete button to empty the list */}
                        <button className='btn-delete' onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                </form>
            </div>
            )
        }
}
