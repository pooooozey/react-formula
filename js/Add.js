import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';
import Ingredient from './Ingredient';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients:{}
        };
    }
    componentDidMount(){
        if(this.props.location.query.exitID){
            //修改
            let item = this.loadLocalData();
            console.log(this)
            this.refs.designation.value = item.title;


        }else{
            //新加
            this.addIngredient();
        }
    }
    loadLocalData(){
        let arr = JSON.parse(localStorage.getItem("formulaList"))||[];
        let item = this.getItemFromLocal(this.props.location.query.exitID,arr);
        let ingredients = item.ingredients.map(function(item){
            item.id = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
            return item;
        });
        console.log(ingredients)
        this.setState({ingredients:ingredients});
        return item;
    }
    getItemFromLocal(ID,arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].id==ID){
                return arr[i];
            }
        }
    }
    addIngredient(){
        let randomID = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
        let newState = this.state.ingredients;
        newState[randomID] = {};
        newState[randomID].val = "";
        newState[randomID].weight = "";
        this.setState({ingredients:newState});

    }
    addIngredientClick(){
        this.addIngredient();
    }
    removeIngredient(ID){
        let newState = this.state.ingredients;
        newState[ID] = null;
        delete newState[ID];
        this.setState({ingredients:newState});
    }
    subIngredients(){
        //验证
        let formula = {
            ingredients : []
        };
        formula.title = this.refs.designation.value.trim();
        
        if(!formula.title){
            this.refs.designation.focus();
            return;
        }

        for(let a in this.refs){
            if(a=="designation"){
                //如果是标题就跳过
                continue;
            }
            let val = this.refs[a].refs.name.value.trim();
            let wg = parseInt(this.refs[a].refs.weight.value.trim());

            if(!val){
                this.refs[a].refs.name.focus();
                return;
            }else if(!wg){
                this.refs[a].refs.weight.value = "";
                this.refs[a].refs.weight.focus();
                return;
            }
            formula.ingredients.push({
                name : val,
                weight : wg,
                total : wg
            });
        }

        let local = JSON.parse(localStorage.getItem("formulaList"))||[];
        formula.imgsrc = "images/default_img1.jpg";

        if(this.props.location.query.exitID){
            //修改
            for(let i=0;i<local.length;i++){
                if(local[i].id==this.props.location.query.exitID){
                    formula.id = this.props.location.query.exitID;
                    local[i] = formula;
                }
            }

        }else{
            //新加
            
            //提交保存
            let randomID = "formulaList"+parseInt(Math.random()*100)+new Date().getTime();
            formula.id = randomID;

            local.push(formula);
        }

        localStorage.setItem("formulaList",JSON.stringify(local));
        hashHistory.push('/local');

    }
	render(){
        let arr = [];
        let This = this;
        for(let a in this.state.ingredients){
            arr.push({
                id : a,
                name : this.state.ingredients[a].name,
                weight : this.state.ingredients[a].weight
            });
        }
        let ingredientsList = arr.map(function(item){
            return (
                <Ingredient name={item.name} weight={item.weight} ref={item.id} key={item.id} id={item.id} removeCB={This.removeIngredient.bind(This)} />
            );
        });
		return (
			<div>
                <div id="head">
                    <Link to="/local" className="back">&lt; 返回</Link>
                    添加配方
                    <span className="add" onClick={this.subIngredients.bind(this)}>确认</span>
                </div>
                <div className="add_box">
                    <div className="content">
                        <div className="row">
                            <div className="title">
                                种类名称
                            </div>
                            <div className="cont">
                                <input type="text" ref="designation" className="ipt ipt-title" />
                            </div>
                        </div>
                        <div className="row">
                            <p className="tip">下方输入每100克主料的配方</p>
                        </div>

                        {ingredientsList}

                        <a className="add-btn" href="javascript:;" onClick={this.addIngredientClick.bind(this)}>+ 添加一项配料</a>
                    </div>
                </div>
            </div>
		);
	}
}


export { Add as default };