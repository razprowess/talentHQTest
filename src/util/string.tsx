class StringUtils{

    public static titleCase(word:string = ""){
        return `${word[0].toUpperCase()}${word.substr(1)}`        
    }
}

export default StringUtils;