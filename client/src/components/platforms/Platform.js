import { useEffect } from 'react';
import { PlatformConsumer } from '../../providers/PlatformProvider';
import PlatformList from './PlatformList';

const Platforms = ({ platforms, getAllPlatforms }) => {
  useEffect( () => {
    getAllPlatforms()
  }, [])

  return (
    <>
      <h1>All Platforms</h1>
      <PlatformList platforms={platforms} />
    </>
  )
}

const ConnectedPlatform = (props) => (
  <PlatformConsumer>
    { value => <Platforms {...props} {...value} />}
  </PlatformConsumer>
)

export default ConnectedPlatform;