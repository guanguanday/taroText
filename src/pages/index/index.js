import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './Child'  
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    this.state = {
      name:'张三'
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  click(){
    this.setState({
      name:"李四"
    })
  }
  render () {
    const {name} = this.state;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.click}>改变名字</Button>
        <Text>{name}</Text>
        <Child name='张三'/>
      </View>
    )
  }
}

