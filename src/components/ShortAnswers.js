import React from 'react';
import ShortQuestion from './ShortQuestion';

const ShortAnswers = () => (
    <div style={{ padding: '25px 30px', display: 'flex', flexDirection: 'column' }}>
        <ShortQuestion />
        <ShortQuestion />
    </div>
);

export default ShortAnswers;