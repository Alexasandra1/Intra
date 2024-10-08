PGDMP  0                    {            IntraDb    16rc1    16rc1 H    	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17177    IntraDb    DATABASE     ~   CREATE DATABASE "IntraDb" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Belarus.1251';
    DROP DATABASE "IntraDb";
                postgres    false            �            1259    18257 
   Consultant    TABLE     �   CREATE TABLE public."Consultant" (
    id integer NOT NULL,
    name character varying(255),
    phone character varying(255),
    email character varying(255)
);
     DROP TABLE public."Consultant";
       public         heap    postgres    false            �            1259    18256    Consultant_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Consultant_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Consultant_id_seq";
       public          postgres    false    225                       0    0    Consultant_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Consultant_id_seq" OWNED BY public."Consultant".id;
          public          postgres    false    224            �            1259    18275    Design    TABLE       CREATE TABLE public."Design" (
    id integer NOT NULL,
    name character varying(255),
    designer_id integer,
    year character varying(255),
    style_id integer,
    price numeric,
    photo_id integer,
    consultant_id integer,
    room_id integer
);
    DROP TABLE public."Design";
       public         heap    postgres    false            �            1259    18274    Design_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Design_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Design_id_seq";
       public          postgres    false    229                       0    0    Design_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Design_id_seq" OWNED BY public."Design".id;
          public          postgres    false    228            �            1259    18266    Design_photos    TABLE     U   CREATE TABLE public."Design_photos" (
    id integer NOT NULL,
    photos bytea[]
);
 #   DROP TABLE public."Design_photos";
       public         heap    postgres    false            �            1259    18265    Design_photos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Design_photos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."Design_photos_id_seq";
       public          postgres    false    227                       0    0    Design_photos_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Design_photos_id_seq" OWNED BY public."Design_photos".id;
          public          postgres    false    226            �            1259    18229 	   IntraUser    TABLE     0  CREATE TABLE public."IntraUser" (
    id integer NOT NULL,
    role_id integer,
    name character varying(255),
    login character varying(255),
    password character varying(255),
    city character varying(255),
    phone character varying(255),
    email character varying(255),
    photo bytea
);
    DROP TABLE public."IntraUser";
       public         heap    postgres    false            �            1259    18228    IntraUser_id_seq    SEQUENCE     �   CREATE SEQUENCE public."IntraUser_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."IntraUser_id_seq";
       public          postgres    false    219                       0    0    IntraUser_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."IntraUser_id_seq" OWNED BY public."IntraUser".id;
          public          postgres    false    218            �            1259    18309    Orders    TABLE     �   CREATE TABLE public."Orders" (
    id integer NOT NULL,
    customer_name character varying(255),
    customer_phone character varying(255),
    customer_email character varying(255),
    design_id integer
);
    DROP TABLE public."Orders";
       public         heap    postgres    false            �            1259    18308    Orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Orders_id_seq";
       public          postgres    false    231                       0    0    Orders_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;
          public          postgres    false    230            �            1259    18222    Role    TABLE     ^   CREATE TABLE public."Role" (
    id integer NOT NULL,
    role_name character varying(255)
);
    DROP TABLE public."Role";
       public         heap    postgres    false            �            1259    18221    Role_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Role_id_seq";
       public          postgres    false    217                       0    0    Role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;
          public          postgres    false    216            �            1259    18243 	   Room_type    TABLE     ^   CREATE TABLE public."Room_type" (
    id integer NOT NULL,
    room character varying(255)
);
    DROP TABLE public."Room_type";
       public         heap    postgres    false            �            1259    18242    Room_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Room_type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Room_type_id_seq";
       public          postgres    false    221                       0    0    Room_type_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Room_type_id_seq" OWNED BY public."Room_type".id;
          public          postgres    false    220            �            1259    17178    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    18250    Style    TABLE     `   CREATE TABLE public."Style" (
    id integer NOT NULL,
    style_name character varying(255)
);
    DROP TABLE public."Style";
       public         heap    postgres    false            �            1259    18249    Style_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Style_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Style_id_seq";
       public          postgres    false    223                       0    0    Style_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Style_id_seq" OWNED BY public."Style".id;
          public          postgres    false    222            �            1259    18323    Tests    TABLE     T   CREATE TABLE public."Tests" (
    id integer,
    photo character varying(255)[]
);
    DROP TABLE public."Tests";
       public         heap    postgres    false            I           2604    18260    Consultant id    DEFAULT     r   ALTER TABLE ONLY public."Consultant" ALTER COLUMN id SET DEFAULT nextval('public."Consultant_id_seq"'::regclass);
 >   ALTER TABLE public."Consultant" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            K           2604    18278 	   Design id    DEFAULT     j   ALTER TABLE ONLY public."Design" ALTER COLUMN id SET DEFAULT nextval('public."Design_id_seq"'::regclass);
 :   ALTER TABLE public."Design" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            J           2604    18269    Design_photos id    DEFAULT     x   ALTER TABLE ONLY public."Design_photos" ALTER COLUMN id SET DEFAULT nextval('public."Design_photos_id_seq"'::regclass);
 A   ALTER TABLE public."Design_photos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            F           2604    18232    IntraUser id    DEFAULT     p   ALTER TABLE ONLY public."IntraUser" ALTER COLUMN id SET DEFAULT nextval('public."IntraUser_id_seq"'::regclass);
 =   ALTER TABLE public."IntraUser" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            L           2604    18312 	   Orders id    DEFAULT     j   ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);
 :   ALTER TABLE public."Orders" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    231    231            E           2604    18225    Role id    DEFAULT     f   ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);
 8   ALTER TABLE public."Role" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            G           2604    18246    Room_type id    DEFAULT     p   ALTER TABLE ONLY public."Room_type" ALTER COLUMN id SET DEFAULT nextval('public."Room_type_id_seq"'::regclass);
 =   ALTER TABLE public."Room_type" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            H           2604    18253    Style id    DEFAULT     h   ALTER TABLE ONLY public."Style" ALTER COLUMN id SET DEFAULT nextval('public."Style_id_seq"'::regclass);
 9   ALTER TABLE public."Style" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �          0    18257 
   Consultant 
   TABLE DATA           >   COPY public."Consultant" (id, name, phone, email) FROM stdin;
    public          postgres    false    225   P                 0    18275    Design 
   TABLE DATA           r   COPY public."Design" (id, name, designer_id, year, style_id, price, photo_id, consultant_id, room_id) FROM stdin;
    public          postgres    false    229   5P                 0    18266    Design_photos 
   TABLE DATA           5   COPY public."Design_photos" (id, photos) FROM stdin;
    public          postgres    false    227   �P       �          0    18229 	   IntraUser 
   TABLE DATA           d   COPY public."IntraUser" (id, role_id, name, login, password, city, phone, email, photo) FROM stdin;
    public          postgres    false    219   
Q                 0    18309    Orders 
   TABLE DATA           `   COPY public."Orders" (id, customer_name, customer_phone, customer_email, design_id) FROM stdin;
    public          postgres    false    231   �Q       �          0    18222    Role 
   TABLE DATA           /   COPY public."Role" (id, role_name) FROM stdin;
    public          postgres    false    217   QR       �          0    18243 	   Room_type 
   TABLE DATA           /   COPY public."Room_type" (id, room) FROM stdin;
    public          postgres    false    221   �R       �          0    17178    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    215   �R       �          0    18250    Style 
   TABLE DATA           1   COPY public."Style" (id, style_name) FROM stdin;
    public          postgres    false    223   ES                 0    18323    Tests 
   TABLE DATA           ,   COPY public."Tests" (id, photo) FROM stdin;
    public          postgres    false    232   xS                  0    0    Consultant_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Consultant_id_seq"', 1, true);
          public          postgres    false    224                       0    0    Design_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Design_id_seq"', 17, true);
          public          postgres    false    228                       0    0    Design_photos_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Design_photos_id_seq"', 4, true);
          public          postgres    false    226                       0    0    IntraUser_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."IntraUser_id_seq"', 9, true);
          public          postgres    false    218                       0    0    Orders_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Orders_id_seq"', 17, true);
          public          postgres    false    230                       0    0    Role_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Role_id_seq"', 2, true);
          public          postgres    false    216                       0    0    Room_type_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Room_type_id_seq"', 1, true);
          public          postgres    false    220                       0    0    Style_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Style_id_seq"', 2, true);
          public          postgres    false    222            X           2606    18264    Consultant Consultant_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Consultant"
    ADD CONSTRAINT "Consultant_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Consultant" DROP CONSTRAINT "Consultant_pkey";
       public            postgres    false    225            Z           2606    18273     Design_photos Design_photos_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Design_photos"
    ADD CONSTRAINT "Design_photos_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."Design_photos" DROP CONSTRAINT "Design_photos_pkey";
       public            postgres    false    227            \           2606    18282    Design Design_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_pkey";
       public            postgres    false    229            R           2606    18236    IntraUser IntraUser_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."IntraUser"
    ADD CONSTRAINT "IntraUser_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."IntraUser" DROP CONSTRAINT "IntraUser_pkey";
       public            postgres    false    219            ^           2606    18316    Orders Orders_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Orders" DROP CONSTRAINT "Orders_pkey";
       public            postgres    false    231            P           2606    18227    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public            postgres    false    217            T           2606    18248    Room_type Room_type_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Room_type"
    ADD CONSTRAINT "Room_type_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Room_type" DROP CONSTRAINT "Room_type_pkey";
       public            postgres    false    221            N           2606    17182     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    215            V           2606    18255    Style Style_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Style"
    ADD CONSTRAINT "Style_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Style" DROP CONSTRAINT "Style_pkey";
       public            postgres    false    223            `           2606    18298     Design Design_consultant_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_consultant_id_fkey" FOREIGN KEY (consultant_id) REFERENCES public."Consultant"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_consultant_id_fkey";
       public          postgres    false    225    4696    229            a           2606    18283    Design Design_designer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_designer_id_fkey" FOREIGN KEY (designer_id) REFERENCES public."IntraUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_designer_id_fkey";
       public          postgres    false    4690    219    229            b           2606    18293    Design Design_photo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_photo_id_fkey" FOREIGN KEY (photo_id) REFERENCES public."Design_photos"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_photo_id_fkey";
       public          postgres    false    4698    227    229            c           2606    18303    Design Design_room_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_room_id_fkey" FOREIGN KEY (room_id) REFERENCES public."Room_type"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_room_id_fkey";
       public          postgres    false    229    221    4692            d           2606    18288    Design Design_style_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Design"
    ADD CONSTRAINT "Design_style_id_fkey" FOREIGN KEY (style_id) REFERENCES public."Style"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Design" DROP CONSTRAINT "Design_style_id_fkey";
       public          postgres    false    223    229    4694            _           2606    18237     IntraUser IntraUser_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IntraUser"
    ADD CONSTRAINT "IntraUser_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."IntraUser" DROP CONSTRAINT "IntraUser_role_id_fkey";
       public          postgres    false    217    219    4688            e           2606    18317    Orders Orders_design_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_design_id_fkey" FOREIGN KEY (design_id) REFERENCES public."Design"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 J   ALTER TABLE ONLY public."Orders" DROP CONSTRAINT "Orders_design_id_fkey";
       public          postgres    false    4700    229    231            �      x�3�,.)��KG��b���� �E�         �   x�m�A
1E��)�@%Imm�n���8���#^���t#?�����,�q���,�ŨG��p�2�7�q�]&���;�ТW��_c�s�6�\�H�+k�Z��U-�U�;�|U5���!����Q�RJM+?m�1o�0B         -   x�3�V��
scss#3K�T3s�Z.#�?.ca"b���� �!	�      �   �   x����
�0����6�6��'�%l�Թ���/J�Nz샐��Cr��yk��/M�	,Q�Z�
���V� ��hVed^�SO����rd�_$G�u�M\��C��1��1	���$�~|XO�?��F����b�H������3!��7x�         �   x�3��#.�%
�И3--=�`NmcsS3�LK��;�&f���rr�p&��ՙ �)gq"#�3D�5�.Cs���0ǂ���(3/��� �#����h./F����oM`��.d=1z\\\ �KZX      �       x�3�,-N-�2���OI-J,�/����� Z��      �      x�3���L�H������ d_      �   �   x�]�K� ��=w�0ޥ���Ƃaƅ�7iB-��oh���"=�t�+uoVxՈ��%Iw��g{w-�-�v��<�JX��𗧜x_eLr3@53��Lz{e�ܲ�Ӳ��1Ԟ�L�o�~@_��xtJ���Xw      �   #   x�3���OI-��2������M��,������ v��            x������ � �     