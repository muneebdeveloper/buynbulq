import React, {Component} from 'react';


class Filter extends Component{

    state={
        categories:['Merchandise','Electronics','Toys/baby items','Clothing','Health & Beauty','Personal Care','Household Items'],
        conditions:['New','Like New','Uninspected Returns','Scratch & Dent','Salvage'],
        lotSize:['case','Pallet']
    }

    render(){
        const {categories, conditions,lotSize} = this.state;
        return(
            <div className="col-sm-3">

                <form className="filter-form">

                    <div className="white-block">
                        <div className="white-block-title">
                            <h5>Filter by:</h5>
                        </div>
                    

                        <div className="white-block-content">

                            <div className="form-group">
                                <label className="label-bottom-margin">Category</label>
                                <ul className="list-unstyled">
                                    <li>
                                        {
                                            categories.map((el)=>{
                                                return(
                                                <label class="filter-checkbox-container">{el}
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>


                            <div className="form-group">
                                <label className="label-bottom-margin">Condition</label>
                                <ul className="list-unstyled">
                                    <li>
                                        {
                                            conditions.map((el)=>{
                                                return(
                                                <label class="filter-checkbox-container">{el}
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>

                            <div className="form-group">
                                <label className="label-bottom-margin">Lot Size</label>
                                <ul className="list-unstyled">
                                    <li>
                                        {
                                            lotSize.map((el)=>{
                                                return(
                                                <label class="filter-checkbox-container">{el}
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}

export default Filter;