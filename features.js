const gfName = "MrsRandom1";
const gfName1 = "MrsRandom2";
const gfName2 = "MrsRandom3";

// module.exports = gfName;
export default gfName;

// the below type exported because the same name needed to call as exported 
export {gfName1, gfName2};

export const randomNum = () =>{
    return Math.floor(Math.random()*50) + "%";
}