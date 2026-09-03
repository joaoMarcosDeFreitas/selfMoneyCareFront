# Explicação

Este projeto segue a estrutura Atomic Design, uma estrutura padrão famosa do react, que separa os componentes por sua complexidade e grau de dependência um do outro.

**Basicamente temos:**
- **Atoms:** Elementos básicos. Ex: `Button, Input, H1...`
- **Molecules:** Junção de átomos. Ex: `Form, Searchbar...`
- **Organisms:** Junção de moléculas. Blocos complexos. Ex: `SideBar, Header, NavBar...`
- **Templates:** Junção de organismos. Une os blocos para. Ex: `homeTemplate, profileTemplate...`

É um sistema de organização que prioriza a colaboração contínua dos componentes, onde um depende do outro para existir e se organizar.