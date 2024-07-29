import { Input, Steps } from '@douyinfe/semi-ui';
import './App.css';
import { useState } from 'react';
import StepOne from './compoments/StepOne';
import StepTwo from './compoments/StepTwo';

function App() {
  const [step, setStep] = useState(0)
  return (
    <div style={{marginTop: 60, padding: '0 20px'}}>
      <Steps type="basic" size="small" current={step}>
        <Steps.Step title="确定淘宝订单号" description="输入你的淘宝订单号" />
        <Steps.Step title="获取邮箱密码" description="去steam登录触发邮箱验证" />
        <Steps.Step title="查看验证码" description="完成验证登录" />
      </Steps>
      {step === 0 && <StepOne setStep={setStep} />}
      {step === 1 && <StepTwo setStep={setStep}/>}
    </div>
  );
}

export default App;
