import Taro,{Component} from '@tarojs/taro'
import {View,Text,Button} from '@tarojs/components'

class Child extends Component{
  render(){
    return(
      <View>{this.props.name}</View>
    )
  }
}
Child.defaultProps = {
  name:"123"
}
export default Child