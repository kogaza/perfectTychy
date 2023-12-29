import React, { ReactElement } from 'react';
import MangaReference from '@/assets/images/references/magna.png';
import BenDevelopReference from '@/assets/images/references/ben_develop.png';
import Reference01 from '@/assets/images/references/01.png';
import Reference12 from '@/assets/images/references/12.png';
import CsCargoReference from '@/assets/images/references/cs_cargo.png';
import DmbReference from '@/assets/images/references/ref_dmb.png';
import GeneralMotors from '@/assets/images/references/general_motors.png';
import HilalTrans from '@/assets/images/references/hilal_trans.png';
import Invenio from '@/assets/images/references/invenio.png';
import JoyGlobal from '@/assets/images/references/joy_global.png';
import MacroMolds from '@/assets/images/references/macro_molds.png';
import Manus from '@/assets/images/references/manus.png';
import Michalska from '@/assets/images/references/michalska.png';
import NewArt from '@/assets/images/references/new_art.png';
import Roek from '@/assets/images/references/roek.png';
import SmerfowaKraina from '@/assets/images/references/smerfowa_kraina.png';
import Smyki from '@/assets/images/references/smyki.png';
import Takeda from '@/assets/images/references/takeda.png';

export interface IReferenceItem {
    image: ReactElement;
    id: string;
}

export const referencesList: IReferenceItem[] = [
    {
        image: (
            <img
                src={MangaReference}
                alt="MangaReference" />
        ),
        id: 'mangaReference',
    },
    {
        image: (
            <img
                src={Reference01}
                alt="Reference01" />
        ),
        id: 'reference01',
    },
    {
        image: (
            <img
                src={HilalTrans}
                alt="HilalTrans" />
        ),
        id: 'hilalTrans',
    },
    {
        image: (
            <img
                src={Smyki}
                alt="Smyki" />
        ),
        id: 'smyki',
    },
    {
        image: (
            <img
                src={Takeda}
                alt="Takeda" />
        ),
        id: 'takeda',
    },
    {
        image: (
            <img
                src={SmerfowaKraina}
                alt="SmerfowaKraina" />
        ),
        id: 'smerfowaKraina',
    },
    {
        image: (
            <img
                src={Michalska}
                alt="Michalska" />
        ),
        id: 'michalska',
    },
    {
        image: (
            <img
                src={GeneralMotors}
                alt="GeneralMotors" />
        ),
        id: 'generalMotors',
    },
    {
        image: (
            <img
                src={MacroMolds}
                alt="MacroMolds" />
        ),
        id: 'macroMolds',
    },
    {
        image: (
            <img
                src={JoyGlobal}
                alt="JoyGlobal" />
        ),
        id: 'joyGlobal',
    },
    {
        image: (
            <img
                src={Manus}
                alt="Manus" />
        ),
        id: 'manus',
    },
    {
        image: (
            <img
                src={Reference12}
                alt="Reference12" />
        ),
        id: 'reference12',
    },
    {
        image: (
            <img
                src={CsCargoReference}
                alt="CsCargoReference" />
        ),
        id: 'csCargoReference',
    },
    {
        image: (
            <img
                src={DmbReference}
                alt="DmbReference" />
        ),
        id: 'dmbReference',
    },
    {
        image: (
            <img
                src={NewArt}
                alt="NewArt" />
        ),
        id: 'newArt',
    },
    {
        image: (
            <img
                src={Roek}
                alt="Roek" />
        ),
        id: 'roek',
    },
    {
        image: (
            <img
                src={Invenio}
                alt="Invenio" />
        ),
        id: 'invenio',
    },
    {
        image: (
            <img
                src={BenDevelopReference}
                alt="BenDevelopReference" />
        ),
        id: 'benDevelopReference',
    },
];
