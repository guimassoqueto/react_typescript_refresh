import { ChildBasic, ChildFC } from './Child'

const colorBasic = 'color basic';
const colorFC = 'color fc';

function Parent() {
  return <>
      <ChildBasic color={colorBasic} onClick={() => console.log('Button ChildBasic')}>
        Button ChildBasic
      </ChildBasic>

    <ChildFC color={colorFC} onClick={() => console.log('Button ChildFC')}>
      Button ChildFC
    </ChildFC>
  </>
}

export default Parent
