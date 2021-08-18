import React from 'react';

export default function CompanyMember({member = {name: ``, position: ``, avatar: ``}}) {
  return <>
    <div className="about-people text-center">
      <div className="item">
        <img className="avatar" src={member.avatar} alt="Member avatar"/>
        <h4 className="h4 text-white">{member.name}</h4>
        <p className="p-small">{member.position}</p>
      </div>
    </div>
  </>
}
