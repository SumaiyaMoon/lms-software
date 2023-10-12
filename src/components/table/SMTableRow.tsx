type SMTableRowProps = {
    key: any;
    Id?: number | string;
    Name?: string;
    Logo?: any;
    Number?: string;
    Active?: any;
    Email?: any;
  }
  export default function SMTableRow(props: SMTableRowProps) {
    const { key, Id, Name, Logo, Number, Active, Email } = props;
    return (
        <>
        
        
                           <tr key={key}>
                               
                                   <td>{Id}</td>
                                   <td>{Logo}</td>
                                   <td>{Name}</td>
                                   <td>{Number}</td>
                                   <td>{Active}</td>
                                   <td>{Email}</td>
                              
                           </tr>
                      
        </>

    );
  }