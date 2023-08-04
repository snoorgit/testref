import React, {useEffect, useState} from 'react';
interface TESTREF_PROPS {
  refValue: object;
}
const TestRef: React.FC<TESTREF_PROPS> = ({
  refValue,
}) => {
  const ref = useRef({
        renderCount: 0
    });
  ref.current.renderCount += 1;
  return ref;
};

export default TestRef;
