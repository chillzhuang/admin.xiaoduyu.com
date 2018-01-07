import React from 'react'
import { Route, Link } from 'react-router-dom'

// import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { update } from '../../actions/account'

import Shell from '../shell'
import TopicList from '../../components/topic/list'


// 纯组件
export class Topics extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    return(<div>

      <div>
        <h1>话题</h1>
        <TopicList
          name="topics"
          filters={{
            query: {
              parent_id: { $exists : true }
            },
            select: {
              __v: 0,
              language: 0,
              recommend: 0,
              parent_id: 0
            },
            options: {
              limit: 100,
              sort: {
                sort: -1
              }
            }
          }}
          />
      </div>
    </div>)
  }

}

// Topics = CSSModules(Topics, styles)
//
// Topics.propTypes = {
//   update: PropTypes.func.isRequired
// }
//
// const mapStateToProps = (state, props) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     update: bindActionCreators(update, dispatch)
//   }
// }
//
// Topics = connect(mapStateToProps,mapDispatchToProps)(Topics)


export default Shell(Topics)
