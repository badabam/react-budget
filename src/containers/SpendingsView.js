import { connect } from 'react-redux'
import Spendings from '../components/Spendings'

const mapStateToProps = state => ({
  spendings: state.spendings,
})

export default connect(mapStateToProps)(Spendings)
