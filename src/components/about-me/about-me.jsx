import {  Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutMe = () => {

    return (
        <Container>
                <ListGroup className='my-2'>
                    <ListGroupItem variant='primary'>Имя: Александр Павлов</ListGroupItem>
                    <ListGroupItem>Возраст: 25</ListGroupItem>
                    <ListGroupItem>email: <Link to='mailto:pavloveone@yandex.ru'>pavloveone@yandex.ru</Link></ListGroupItem>
                    <ListGroupItem>Адрес: г.Москва</ListGroupItem>
                    <ListGroupItem>Номер телефона: <Link to='tel:89129923797'>89129923797</Link></ListGroupItem>
                    <ListGroupItem>Телеграм: <Link target='_blank' to='https://t.me/pavloveone'>@pavloveone</Link></ListGroupItem>
                    <ListGroupItem>Github: <Link target='_blank' to='https://github.com/pavloveone'>https://github.com/pavloveone</Link></ListGroupItem>
                    <ListGroupItem>Опыт: 1,5 года</ListGroupItem>
                </ListGroup>
        </Container>
    );
}