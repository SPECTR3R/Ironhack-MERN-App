$	���381�`|�8����^��1���;�j�f  UP�9
-@�x"���-^*i�,4F-���E4}�d���9!t@�45�#N����@HL��ñՕ?��Gx��AIa� ���B@��!rKF��5 e��  �gf�@ �Ʊ�#
�8��M��)����4��Z�d�	"��>��2	��fK(�w}��z(
��U�ilQ1jy    IDAT�nݒT�%��B�-׵[B�E�K�ܙuW�ZM�����y9���� @+�;}�Ny�m��]�C�Y������Z�_�l�o�帔�ğ{5ܦ����.w��rj��ٱٹW<}�K���w�|�r�[<�sA���:5 ��*)ך�_�LW,V�����Z6��������T����X�#]��V�T��W���K�늞��5�B_�� ���M�L�$ges�r��7s����}Y�qE�
j�{�0N���q1{}���_�$�p��q��zTTN����g[�J�ps������H��g��#{�e-��儔�������9�#�I	��'�W��\ ���r�����E�����-��
�C���3���B4��#r:����ã��/}� 9Yƃ� ax�T%��������d� . 4i5�f`FFL���d�l�O��)</Pπ,YG 9�U�sLu�l��B�p��x,ӹ��ITi��5 r�S��38*����{�LE�υ�ϼ
�D��Q�*�c�@�	�X@v� |�%/����5˂�9G�*��{6���e��>�;�̹�pk8�����-�9��/�A aw�]��w�A�*�2�����o ��.�)�2��N���]_��!R���p��|?9��9���Z��԰T�'���یX9Ś&e�UC�n�DxR]�U����B,!f��Ϲ�qr�=���A��P;�m崡�����Y����$`o���\��m��H�}pK��%w+[aj ����3Òo���ǩ��(���H���*�'�Z �V�Y���"He�[+ ��d�DL2{�oϩZkD�#x߃��p<����ȓ�=UVsN����@�{��[<=�����~;�w�FdVk}��\�=�/pA��!lzHp���3��zF�8��w�ȁ|P�Rp̑#� ����;�Aޫ';dV��Բ�Q�2
H3�G&ml�zY{0���3Ï#�����z�����
�!�S %����#���Z�����Y�П���u-��&DԴ�ӻ��wQ �)� �9��0� ���� p����0Y����n:F�|=��N�\��_s-���-0 �Y��S�a-���ׂ�uQnǚ��%_���S��'�� -u����? ������|߾~��E�ϥG�I�֏/Ӎ�r�p��ʓ��~s������-k���!������\Y��|��6�����B�����]�X�l�ֶ'8ܹ�@7��V�fƤ���^[�Z6X��4�f����UrB��T�A˺�bM陳_~෤��z\c6�t�%��7�eج<^���b�Z�?׊V�B_�?�r����u���i���7��qY��BLY,��,o��Ϲy|
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset, ColorModeProvider, Flex } from '@chakra-ui/core';

// pages
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import CreateQuestion from './pages/CreateQuestion';
import CreateTest from './pages/CreateTest';

import Profile from './pages/Profile';

//components
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

//Hooks
import { ProvideAuth } from './services/AuthService';

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <ThemeProvider>
        <ColorModeProvider>
          <Flex direction="column" align="center" justify="center">
            <CSSReset />
            <Router>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
              </style>
              <Switch>
                <Route exact component={Home} path="/" />
                <Route exact component={AuthPage} path="/auth/:mode" />
                <PrivateRoute exact component={Profile} path="/profile" />
                <PrivateRoute exact component={CreateQuestion} path="/createQuestion" />
                <Route exact component={CreateTest} path="/createTest" />
              </Switch>
              <Footer />
            </Router>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ProvideAuth>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();