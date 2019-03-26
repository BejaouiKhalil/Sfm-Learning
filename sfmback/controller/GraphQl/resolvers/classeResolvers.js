const classe = require('../../../models/Class');
module.exports = {
    Query:{
    classes: () => classe.find(),
    class: (_,{id}) => classe.findById(id)
},
    Mutation:{
      
        createClass:(_,{name})=>{
            console.log("hi :"+ name);
            return classe.create({name:name});
        }
    }
};