import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Input } from "../../shared/components/Input/Input";
import { Button } from '../../shared/components/Button/Button';
import { Form } from '../../shared/components/Form/Form';
import { ForgotPasswordModal } from '../../shared/components/ForgotPasswordModal/ForgotPasswordModal';

import toast from 'react-hot-toast';

import './DesignsPage.scss'

export function DesignsPage() {


    return (
        <div className="designsPage__body">
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}