import { connect } from 'react-redux'
import SpendingForm from '../components/SpendingForm'
import { onFormSubmit, updateFormInput } from '../actions'

const mapStateToProps = state => ({
  textValue: state.textValue,
  amountValue: state.amountValue,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(onFormSubmit()),
  updateFormInput: spending => dispatch(updateFormInput(spending)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpendingForm)
