import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

export const Cscb = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/portefolio'} right={'/portefolio/project-2'}/>
            </div>
        </main>
    );
}

export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <ButtonsBottom left={'/portefolio/cscb'} right={'/portefolio/project-3'}/>
            </div>
        </main>
    );
}

export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <ButtonsBottom left={'/portefolio/project-2'} right={'/portefolio/project-4'}/>
            </div>
        </main>
    );
}

export const Project4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3} />
                <ButtonsBottom left={'/portefolio/project-3'} right={'/portefolio/contact'}/>
            </div>
        </main>
    );
}