import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Home);